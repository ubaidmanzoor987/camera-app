import router from 'next/router';

import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { MobileIcon } from '@/assets/svg/mobile';
import Button from '@/components/core/Button';
import FieldInput from '@/components/core/FieldInput';
import Heading from '@/components/core/Header';

import { login } from '@/validations/login';
import { getTranslations } from '@/utils/helper';
import { getAppDataSelector } from '@/store/app';
import { DivMain, StyledText, StyledSeperatorDiv, StyledSeperatorText, StyledInnerDiv } from './index.styles';

interface Values {
  mobileNumber: string;
}

const Login = () => {
  const initialValue: Values = {
    mobileNumber: '',
  };

  const { selectedLanguage } = useSelector(getAppDataSelector);

  const t = getTranslations(selectedLanguage);

  const handleLogin = () => {
    router.push('/otpVerification');
  };

  const handleBack = () => {
    router.push('/language');
  };

  return (
    <DivMain>
      <Formik initialValues={initialValue} onSubmit={handleLogin} validationSchema={login}>
        {({ values, errors }) => {
          return (
            <Form>
              <Heading text={t['get_started']} onClick={handleBack} />
              <StyledInnerDiv>
                <MobileIcon />
                <Field
                  as={FieldInput}
                  id="mobileNumber"
                  placeholder={t['enter_mobile_number']}
                  name="mobileNumber"
                  autoComplete="off"
                  autoFocus
                  className="my-2 m-auto"
                  value={values.mobileNumber}
                  error={errors.mobileNumber}
                />

                <Button type="submit" className="my-2 m-auto" disabled={Object.keys(errors).length > 0}>
                  {t['login']}
                </Button>

                <StyledSeperatorDiv>
                  <StyledSeperatorText className="mx-2 my-3">{t['or']}</StyledSeperatorText>
                </StyledSeperatorDiv>
                <Button onClick={handleLogin} className="my-2" isTransparent>
                  <StyledText>{t['scan_qr']}</StyledText>
                </Button>
              </StyledInnerDiv>
            </Form>
          );
        }}
      </Formik>
    </DivMain>
  );
};

export default Login;
