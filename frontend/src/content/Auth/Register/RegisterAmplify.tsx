import { FC } from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Link from 'src/components/Link';

import {
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  Typography,
  FormControlLabel,
  CircularProgress
} from '@mui/material';
import { useAuth } from 'src/hooks/useAuth';
import { useRefMounted } from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

export const RegisterAmplify: FC = (props) => {
  const { register } = useAuth() as any;
  const isMountedRef = useRefMounted();
  const { t }: { t: any } = useTranslation();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      terms: false,
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
        await register(values.email, values.password);

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

  return (
    <form noValidate onSubmit={formik.handleSubmit} {...props}>
      <TextField
        error={Boolean(formik.touched.email && formik.errors.email)}
        fullWidth
        margin="normal"
        helperText={formik.touched.email && formik.errors.email}
        label={t('Email address')}
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
        margin="normal"
        helperText={formik.touched.password && formik.errors.password}
        label={t('Password')}
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
          <>
            <Typography variant="body2">
              {t('I accept the')}{' '}
              <Link href="#">{t('terms and conditions')}</Link>.
            </Typography>
          </>
        }
      />
      {Boolean(formik.touched.terms && formik.errors.terms) && (
        <FormHelperText error>{formik.errors.terms}</FormHelperText>
      )}
      <Button
        sx={{
          mt: 3
        }}
        color="primary"
        startIcon={
          formik.isSubmitting ? <CircularProgress size="1rem" /> : null
        }
        disabled={formik.isSubmitting}
        type="submit"
        fullWidth
        size="large"
        variant="contained"
      >
        {t('Create your account')}
      </Button>
    </form>
  );
};

export default RegisterAmplify;
