import router from 'next/router';
import { CardIcon } from '@/assets/svg/card-icon';
import Header from '@/components/core/Header';
import StepLayout from '@/components/StepsLayout';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';
import WaterMarkText from '@/components/core/WaterMarkText/WaterMarkText';
import { getTranslations } from '@/utils/helper';
import {
  DivMain,
  VerificationCardStyled,
  VerificationSmallTextStyled,
  VerificationStyled,
  VerificationTextStyled,
} from './index.styles';

/**
 *
 * @returns Verification page
 */

const Verification = () => {
  const { selectedLanguage, doAddharCard } = useAppSelector(getAppDataSelector);
  const t = getTranslations(selectedLanguage);

  const onClickHeaderIcon = () => {
    router.push('/language');
  };

  const onClickCard = () => {
    router.push('/identify_document');
  };

  const goToVideo = () => {
    router.push('/video_record');
  };

  return (
    <DivMain>
      <Header text={t['identity_verification']} onClick={onClickHeaderIcon} />
      <WaterMarkText />
      <VerificationStyled>
        <VerificationCardStyled>
          <CardIcon />
        </VerificationCardStyled>
        <VerificationTextStyled>{t['verify_your_identity']}</VerificationTextStyled>
        <VerificationSmallTextStyled>{t['it_will_take_less_than_2_minutes']}</VerificationSmallTextStyled>
        <StepLayout
          rightIcon={doAddharCard?.respcode === '200' ? 'done' : 'arrow'}
          step={t['step1']}
          heading={t['identity_document_verification']}
          content={t['take_a_picture_of_an_identity_document_and_upload_it_for_verification']}
          onClick={onClickCard}
        />
        <StepLayout
          rightIcon="arrow"
          step={t['step2']}
          heading={t['record_a_selfie_video']}
          content={t['speak_out_load_and_move_your_head_finish_actions_in_25_seconds']}
          isDisabled={doAddharCard?.respcode === '200' ? false : true}
          onClick={goToVideo}
        />
      </VerificationStyled>
    </DivMain>
  );
};

export default Verification;
