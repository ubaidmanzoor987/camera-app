import { useEffect, useRef, useState } from 'react';
import router from 'next/router';
import Lottie from 'react-lottie';
import lottieFile from '@/assets/jpg/7893-confetti-cannons.json';
import { VerifiiedIcon } from '@/assets/svg/verified-Icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import WaterMarkText from '@/components/core/WaterMarkText/WaterMarkText';
import { getTranslations } from '@/utils/helper';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';
import {
  DivBottom,
  DivMain,
  VerificationCardStyled,
  VerificationSuccessfulSmallTextStyled,
  VerificationSuccessfulTextStyled,
} from './index.style';

/**
 *
 * @returns Verified page
 */
const onClickHeaderIcon = () => {
  router.push('/video_screen');
};

const Verified = () => {
  const { selectedLanguage } = useAppSelector(getAppDataSelector);
  const [displayLottie, setDisplayLottie] = useState<boolean>(false);
  const [stop, setStop] = useState<boolean>(false);
  const submitHit = useRef(false);

  const t = getTranslations(selectedLanguage);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    if (displayLottie === true) {
      setTimeout(() => {
        setStop(true);
        setDisplayLottie(false);
      }, 4000);
    }
  }, [displayLottie]);

  useEffect(() => {
    if (stop) {
      submitHit.current = false;
      setStop(false);
    }
  }, [stop]);

  const lottieHandler = () => {
    submitHit.current = true;
    setDisplayLottie(true);
  };

  return (
    <DivMain>
      <div>
        <Header text={t['verification_sucessful']} onClick={onClickHeaderIcon} />
        <WaterMarkText />

        <VerificationCardStyled>
          <VerifiiedIcon />
          {displayLottie && <Lottie options={defaultOptions} isStopped={stop} style={{ position: 'fixed' }} />}
        </VerificationCardStyled>
        <VerificationSuccessfulTextStyled>{t['verification_completed']}</VerificationSuccessfulTextStyled>
        <VerificationSuccessfulSmallTextStyled>
          {t['your_verification_is_completed_and_all_your_data_is_stored_securely']}
        </VerificationSuccessfulSmallTextStyled>
      </div>
      <DivBottom>
        <Button className="m-auto" onClick={lottieHandler}>
          {t['finish']}
        </Button>
      </DivBottom>
    </DivMain>
  );
};
export default Verified;
