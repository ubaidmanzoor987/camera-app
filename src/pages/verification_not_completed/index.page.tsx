import router from 'next/router';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import { Denied } from '@/assets/svg/denied';
import { getTranslations } from '@/utils/helper';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';
import { DivBottom, DivMain, StyledHeading, StyledDescription, SvgDiv } from './index.styles';

/**
 *
 * @returns VerificationNotCompleted page
 */

const VerificationNotCompleted = () => {
  const { selectedLanguage } = useAppSelector(getAppDataSelector);
  const onClickHeaderIcon = () => {
    router.back();
  };

  const onClickTry = () => {
    router.push('/otpVerification');
  };

  const t = getTranslations(selectedLanguage);

  return (
    <DivMain>
      <Header text={t['verification_failed']} onClick={onClickHeaderIcon} />
      <div>
        <SvgDiv>
          <Denied />
        </SvgDiv>
        <StyledHeading>{t['verification_not_completed']}</StyledHeading>
        <StyledDescription>{t['your_verification_is_not_completed_please_try_again']}</StyledDescription>
      </div>
      <DivBottom>
        <Button className="m-auto" onClick={onClickTry}>
          {t['try_again']}
        </Button>
      </DivBottom>
    </DivMain>
  );
};
export default VerificationNotCompleted;
