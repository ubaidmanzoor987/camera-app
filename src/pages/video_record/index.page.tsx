import Image from 'next/image';
import router from 'next/router';
import React from 'react';
import Screenshot from '@/assets/png/video1.png';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import { getTranslations } from '@/utils/helper';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';
import WaterMarkText from '@/components/core/WaterMarkText/WaterMarkText';
import {
  DivGraterThenIconStyled,
  DivMain,
  DivVideoStyled,
  InstructionStyled,
  ParagraphInstructionPoint1Styled,
  SmallTextStyled,
  TextStyled,
  FooterButtonStyle,
  Row,
  DivUpperSection,
} from './index.style';

/**
 *
 * @returns Record video page
 */
const onClickHeaderIcon = () => {
  router.push('/verification');
};

const onClickContinue = () => {
  router.push('/camera_video');
};

const VideoRecord = () => {
  const { selectedLanguage } = useAppSelector(getAppDataSelector);
  const t = getTranslations(selectedLanguage);

  return (
    <DivMain>
      <DivUpperSection>
        <Header text={t['record_video']} onClick={onClickHeaderIcon} />
        <WaterMarkText />
        <TextStyled>{t['record_a_selfie_video']}</TextStyled>
        <SmallTextStyled>{t['let’s_make_sure_nobody’s_improvising_you']}</SmallTextStyled>
        <DivVideoStyled>
          <Image src={Screenshot} />
        </DivVideoStyled>
        <InstructionStyled>{t['instruction']}</InstructionStyled>
        <Row>
          <DivGraterThenIconStyled>
            <GreaterThenIcon />
          </DivGraterThenIconStyled>
          <ParagraphInstructionPoint1Styled>{t['speak_out_load_and_move_your_head']}</ParagraphInstructionPoint1Styled>
        </Row>
        <Row>
          <DivGraterThenIconStyled>
            <GreaterThenIcon />
          </DivGraterThenIconStyled>
          <ParagraphInstructionPoint1Styled>{t['finish_actions_in_25_seconds']}</ParagraphInstructionPoint1Styled>
        </Row>
      </DivUpperSection>

      <FooterButtonStyle>
        <Button isBottom onClick={onClickContinue} className="m-auto">
          {t['continue']}
        </Button>
      </FooterButtonStyle>
    </DivMain>
  );
};

export default VideoRecord;
