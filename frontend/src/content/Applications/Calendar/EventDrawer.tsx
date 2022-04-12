import type { FC } from 'react';
import PropTypes from 'prop-types';
import { addMinutes } from 'date-fns';
import _ from 'lodash';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useMemo } from 'react';

import {
  styled,
  Box,
  Card,
  TextField,
  Button,
  IconButton,
  Divider,
  FormControlLabel,
  Grid,
  Alert,
  Checkbox,
  CircularProgress,
  Tooltip,
  Typography,
  lighten,
  Zoom
} from '@mui/material';
import { DateTimePicker } from '@mui/lab';
import type { Event } from 'src/models/calendar';
import { useDispatch } from 'src/store';
import { createEvent, updateEvent, deleteEvent } from 'src/slices/calendar';
import { useTranslation } from 'react-i18next';

const IconButtonError = styled(IconButton)(
  ({ theme }) => `
     background: ${theme.colors.error.lighter};
     color: ${theme.colors.error.main};

     &:hover {
      background: ${lighten(theme.colors.error.lighter, 0.4)};
     }
`
);

const CardActionsWrapper = styled(Card)(
  ({ theme }) => `
     background: ${theme.colors.alpha.black[5]};
     box-shadow: none;
     margin: 0 ${theme.spacing(3)};
`
);

interface CalendarForm {
  allDay: boolean;
  color: string;
  description: string;
  end: Date;
  start: Date;
  title: string;
  submit: any;
}

interface AddEditEventModalProps {
  event?: Event;
  onAddComplete?: () => void;
  onCancel?: () => void;
  onDeleteComplete?: () => void;
  onEditComplete?: () => void;
  range?: { start: number; end: number };
}

const EventDrawer: FC<AddEditEventModalProps> = ({
  event,
  onAddComplete,
  onCancel,
  onDeleteComplete,
  onEditComplete,
  range
}) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const initialValues = useMemo((): CalendarForm => {
    if (event) {
      return {
        allDay: event.allDay || false,
        color: event.color || '',
        description: event.description || '',
        end: event.end ? new Date(event.end) : addMinutes(new Date(), 30),
        start: event.start ? new Date(event.start) : new Date(),
        title: event.title || '',
        submit: null
      };
    }

    if (range) {
      return {
        allDay: false,
        color: '',
        description: '',
        end: new Date(range.end),
        start: new Date(range.start),
        title: '',
        submit: null
      };
    }

    return {
      allDay: false,
      color: '',
      description: '',
      end: addMinutes(new Date(), 30),
      start: new Date(),
      title: '',
      submit: null
    };
  }, [event, range]);

  const isCreating = !event;

  const handleDelete = async (): Promise<void> => {
    try {
      dispatch(deleteEvent(event.id));
      onDeleteComplete();

      enqueueSnackbar(t('The event has been deleted'), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
      });
    } catch (err) {
      console.error(err);
    }
  };

  const { t }: { t: any } = useTranslation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        allDay: Yup.bool(),
        description: Yup.string().max(5000),
        end: Yup.date().when(
          'start',
          (start: Date, schema: any) =>
            start &&
            schema.min(start, t('The end date should be after start date'))
        ),
        start: Yup.date(),
        title: Yup.string().max(255).required(t('The title field is required'))
      })}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        try {
          const data = {
            allDay: values.allDay,
            description: values.description,
            end: values.end.getTime(),
            start: values.start.getTime(),
            title: values.title
          };

          if (event) {
            dispatch(updateEvent(event.id, data));
          } else {
            dispatch(createEvent(data));
          }

          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar(t('The calendar has been successfully updated!'), {
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center'
            },
            TransitionComponent: Zoom
          });

          if (isCreating) {
            onAddComplete();
          } else {
            onEditComplete();
          }
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        touched,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Box p={3}>
            <Typography variant="h4">
              {isCreating
                ? t('Create new calendar event')
                : t('Edit calendar event')}
            </Typography>
          </Box>
          <Divider />
          <Box px={3} py={2}>
            <TextField
              error={Boolean(touched.title && errors.title)}
              fullWidth
              helperText={touched.title && errors.title}
              label={t('Event title')}
              name="title"
              margin="normal"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.title}
              variant="outlined"
            />
            <TextField
              error={Boolean(touched.description && errors.description)}
              fullWidth
              multiline
              minRows={3}
              helperText={touched.description && errors.description}
              label={t('Event description')}
              name="description"
              margin="normal"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.description}
              variant="outlined"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={values.allDay}
                  onChange={handleChange}
                  name="allDay"
                  color="primary"
                />
              }
              label={t('This event lasts all day')}
            />

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DateTimePicker
                  value={values.start}
                  onChange={(date) => setFieldValue('start', date)}
                  label={t('Event start date')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      name="start"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DateTimePicker
                  value={values.end}
                  onChange={(date) => setFieldValue('end', date)}
                  label={t('Event end date')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      name="end"
                    />
                  )}
                />
              </Grid>
            </Grid>
            {Boolean(touched.end && errors.end) && (
              <Alert
                sx={{
                  mt: 2,
                  mb: 1
                }}
                severity="error"
              >
                {errors.end}
              </Alert>
            )}
          </Box>
          <CardActionsWrapper
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2
            }}
          >
            <Box>
              {!isCreating && (
                <Tooltip arrow title={t('Delete this event')}>
                  <IconButtonError onClick={() => handleDelete()}>
                    <DeleteTwoToneIcon />
                  </IconButtonError>
                </Tooltip>
              )}
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  mr: 1
                }}
                color="secondary"
                onClick={onCancel}
              >
                {t('Cancel')}
              </Button>
              <Button
                variant="contained"
                type="submit"
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                color="primary"
              >
                {isCreating ? t('Add meeting') : t('Save modifications')}
              </Button>
            </Box>
          </CardActionsWrapper>
        </form>
      )}
    </Formik>
  );
};

EventDrawer.propTypes = {
  // @ts-ignore
  event: PropTypes.object,
  // @ts-ignore
  range: PropTypes.object,
  onAddComplete: PropTypes.func,
  onCancel: PropTypes.func,
  onDeleteComplete: PropTypes.func,
  onEditComplete: PropTypes.func
};

EventDrawer.defaultProps = {
  onAddComplete: () => {},
  onCancel: () => {},
  onDeleteComplete: () => {},
  onEditComplete: () => {}
};

export default EventDrawer;
