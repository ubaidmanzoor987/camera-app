import router from 'next/router';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import { PasswordIcon } from '@/assets/svg/password';
import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';
import OTPInput from '@/components/core/Otp';
import { useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector, setVerificationStep } from '@/store/app';

import { ErrorInfo } from '@/assets/svg/error-info';
import { getTranslations } from '@/utils/helper';
import { DivError, DivMain } from './index.styles';

const VerifyOtp = () => {
  const { selectedLanguage } = useSelector(getAppDataSelector);

  const dispatch = useAppDispatch();
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const t = getTranslations(selectedLanguage);

  const handleBack = () => {
    router.push('/login');
  };
  const handleOtp = (e: any) => {
    setOtp(e);
    // for error
    if (otp.length >= 5) {
      setError(true);
    } else setError(false);
  };
  const handleContinue = () => {
    router.push('/verification');
    dispatch(setVerificationStep(1));
  };

  return (
    <DivMain isError={error}>
      <div className="heading">
        <Heading text={t['mobile_verification']} onClick={handleBack} />
      </div>
      <div className="inner">
        <div className="relative">
          <div className="barIcon">
            <BarIcon />
          </div>
          <div className="crossIcon" onClick={handleBack}>
            <CrossIcon />
          </div>
          <div className="my-5 text-center">
            <PasswordIcon />
            <div className="title">{t['verification_code']}</div>
            <p className="description">{t['please_enter_the_verification_code_we_sent_to_your_phone_number']}</p>
          </div>
          <OTPInput
            autoFocus
            isNumberInput
            length={6}
            className="otpContainer"
            inputClassName="otpInput"
            onChangeOTP={handleOtp}
          />
          {error && (
            <DivError>
              <ErrorInfo /> &nbsp; Invalid OTP entered.
            </DivError>
          )}
          <div className="d-flex w-100 justify-content-center align-items-center mt-4">
            <span className="mx-2 code-text">{t["i_did'nt_receive_a_code"]}</span>
            <button className="btn btn-primary">
              <span className="text">{t['resend']}</span>
            </button>
          </div>
        </div>
        <div className="footer-container">
          <Button onClick={handleContinue} className="m-auto">
            {t['continue']}
          </Button>
        </div>
      </div>
    </DivMain>
  );
};

export default VerifyOtp;
