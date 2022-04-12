import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { FC } from 'react';
import Link from 'src/components/Link';

import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Box,
  Typography,
  CircularProgress,
  styled
} from '@mui/material';
import { useAuth } from 'src/hooks/useAuth';
import { useRefMounted } from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';

const ImgWrapper = styled('img')(
  ({ theme }) => `
    margin-right: ${theme.spacing(1)};
`
);

export const RegisterFirebaseAuth: FC = (props) => {
  const { createUserWithEmailAndPassword, signInWithGoogle } = useAuth() as any;
  const isMountedRef = useRefMounted();
  const { t }: { t: any } = useTranslation();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      terms: true,
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t('The email provided should be a valid email address'))
        .max(255)
        .required(t('The email field is required')),
      password: Yup.string()
        .min(8)
        .max(255)
        .required(t('The password field is required')),
      terms: Yup.boolean().oneOf(
        [true],
        t('You must agree to our terms and conditions')
      )
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await createUserWithEmailAndPassword(values.email, values.password);

        if (isMountedRef()) {
          const backTo =
            (router.query.backTo as string) || '/dashboards/reports';
          router.push(backTo);
        }
      } catch (err) {
        console.error(err);

        if (isMountedRef()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    }
  });

  const handleGoogleClick = async (): Promise<void> => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box {...props}>
      <Button
        fullWidth
        onClick={handleGoogleClick}
        size="large"
        variant="outlined"
      >
        <ImgWrapper alt="Google" src="/static/images/logo/google.svg" />
        Register with Google
      </Button>
      <Divider
        sx={{
          mt: 4,
          mb: 2
        }}
      >
        {t('or')}
      </Divider>
      <form noValidate onSubmit={formik.handleSubmit}>
        <TextField
          error={Boolean(formik.touched.email && formik.errors.email)}
          fullWidth
          helperText={formik.touched.email && formik.errors.email}
          label={t('Email address')}
          placeholder={t('Your email address here...')}
          margin="normal"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="email"
          value={formik.values.email}
          variant="outlined"
        />
        <TextField
          error={Boolean(formik.touched.password && formik.errors.password)}
          fullWidth
          helperText={formik.touched.password && formik.errors.password}
          label={t('Password')}
          placeholder={t('Your password here...')}
          margin="normal"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="password"
          value={formik.values.password}
          variant="outlined"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.terms}
              name="terms"
              color="primary"
              onChange={formik.handleChange}
            />
          }
          label={
            <Typography variant="body2">
              {t('I accept the')}{' '}
              <Link href="#">{t('terms and conditions')}</Link>.
            </Typography>
          }
        />
        <Button
          sx={{
            mt: 3
          }}
          color="primary"
          startIcon={
            formik.isSubmitting ? <CircularProgress size="1rem" /> : null
          }
          disabled={formik.isSubmitting}
          size="large"
          fullWidth
          type="submit"
          variant="contained"
        >
          {t('Create account')}
        </Button>
      </form>
    </Box>
  );
};
