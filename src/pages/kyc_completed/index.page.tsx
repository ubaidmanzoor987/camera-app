import { useEffect, useRef, useState } from 'react';
import router from 'next/router';
import Lottie from 'react-lottie';
import { useInterval } from 'usehooks-ts';
import { useDispatch } from 'react-redux';
import lottieFile from '@/assets/jpg/7893-confetti-cannons.json';
import { VerifiiedIcon } from '@/assets/svg/verified-Icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import WaterMarkText from '@/components/core/WaterMarkText/WaterMarkText';
import { getTranslations } from '@/utils/helper';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';
import { GetVcipLink } from '@/store/app/appSlice';
import FullscreenLoader from '@/components/core/FullscreenLoader';
import { RejectedIcon } from '@/assets/svg/reject_icon';
import { IncompleteIcon } from '@/assets/svg/incomplete_icon';
import { KycRevIcon } from '@/assets/svg/kycReview';
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

const Completed = () => {
  const { selectedLanguage, getVcipLink, vciprefId, getVcipLinkPending } = useAppSelector(getAppDataSelector);
  const [displayLottie, setDisplayLottie] = useState<boolean>(false);
  const [stop, setStop] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const submitHit = useRef(false);
  const dispatch = useDispatch();
  const t = getTranslations(selectedLanguage);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  useInterval(() => {
    dispatch(
      GetVcipLink({
        upload: {
          vcipref: vciprefId,
        },
      })
    );
  }, 5000);

  useEffect(() => {
    if (getVcipLink?.vcipstatus !== '1') {
      setLoader(false);
    }
  }, [getVcipLinkPending]);
  useEffect(() => {
    if (displayLottie === true) {
      setTimeout(() => {
        setStop(true);
        setDisplayLottie(false);
      }, 4000);
    }
  }, [displayLottie]);
  useEffect(() => {
    if (submitHit.current) {
      if (getVcipLink?.redirectflag === '0') {
        console.log('No navigation');
      } else if (getVcipLink?.redirectflag === '1') {
        window.location.href = getVcipLink?.redirecturl;
      } else if (getVcipLink?.redirectflag === '2') {
        console.log('Mobile Navigation');
      }
    }
    submitHit.current = false;
    setStop(false);
  }, [stop]);
  const lottieHandler = () => {
    submitHit.current = true;
    setDisplayLottie(true);
  };
  const handleRetake = () => {
    router.push('/?d=' + vciprefId);
  };
  return (
    <>
      {loader ? (
        <FullscreenLoader />
      ) : (
        <DivMain>
          <div>
            <Header text={t['status']} onClick={onClickHeaderIcon} />
            <WaterMarkText />

            <VerificationCardStyled>
              {getVcipLink?.vcipstatus === '4' ? (
                <VerifiiedIcon />
              ) : getVcipLink?.vcipstatus === '5' ? (
                <RejectedIcon />
              ) : getVcipLink.vcipstatus === '1' ? (
                <KycRevIcon />
              ) : (
                <IncompleteIcon />
              )}

              {displayLottie && <Lottie options={defaultOptions} isStopped={stop} style={{ position: 'fixed' }} />}
            </VerificationCardStyled>
            <VerificationSuccessfulTextStyled>
              {getVcipLink?.vcipstatus === '1'
                ? t['kyc_under_review']
                : getVcipLink?.vcipstatus === '4'
                ? t['kyc_completed']
                : getVcipLink?.vcipstatus === '5'
                ? t['kyc_rejected']
                : t['kyc_process_has_been_completed_and_is_under_review']}
            </VerificationSuccessfulTextStyled>
            <VerificationSuccessfulSmallTextStyled>
              {getVcipLink?.vcipstatus === '1'
                ? t['your_verification_is_pending_we_will_let_you_know_when_got_response_from_agent']
                : getVcipLink?.vcipstatus === '4'
                ? t['your_verification_is_completed_and_all_your_data_is_stored_securely']
                : getVcipLink?.vcipstatus === '5'
                ? t['your_kyc_got_rejected']
                : t['incase_your_process_was_or_your_call']}
            </VerificationSuccessfulSmallTextStyled>
          </div>
          <DivBottom>
            <Button className="m-auto" onClick={getVcipLink.vcipstatus === '4' ? lottieHandler : handleRetake}>
              {getVcipLink?.vcipstatus === '1' ? t['done'] : getVcipLink.vcipstatus === '4' ? t['done'] : t['retry']}
            </Button>
          </DivBottom>
        </DivMain>
      )}
    </>
  );
};
export default Completed;
