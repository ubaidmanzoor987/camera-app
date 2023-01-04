import router from 'next/router';
import React from 'react';

import { useDispatch } from 'react-redux';
import { DriverLincenceIcon } from '@/assets/svg/driver-lincence-icon';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import { IdCardIcon } from '@/assets/svg/id-card-icon';
import { PassportIcon } from '@/assets/svg/passport-icon';
import { VoterIcon } from '@/assets/svg/voter-icon';
import Header from '@/components/core/Header';
import { getTranslations } from '@/utils/helper';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector, setCardType, setPassport, setRetakeType } from '@/store/app';
import WaterMarkText from '@/components/core/WaterMarkText/WaterMarkText';
import MyVerticallyCenteredModal from '@/components/identify_document_modal';
import {
  DivGreaterIcon,
  DivMain,
  DocumentContainer,
  IdentificationSmallTextStyled,
  IdentificationStyled,
  IdentificationTextStyled,
  IdentifyText,
  Row,
  StyledLine,
} from './index.style';

/**
 *
 * @returns Verification document page
 */

const onClickHeaderIcon = () => {
  router.push('/verification');
};

const IdentityDocument = () => {
  const { selectedLanguage } = useAppSelector(getAppDataSelector);
  const dispatch = useDispatch();
  const t = getTranslations(selectedLanguage);
  const [modalShow, setModalShow] = React.useState(false);
  const document = [
    {
      name: t['aadhaar_card'],
      Svg: IdCardIcon,
    },
    {
      name: t['passport'],
      Svg: PassportIcon,
    },
    {
      name: t['licence'],
      Svg: DriverLincenceIcon,
    },
    { name: t['voter_id'], Svg: VoterIcon },
  ];

  const onClickCard = (id: any, doc: any) => {
    if (id === 2 || id === 3) {
      setModalShow(false);
    } else {
      setModalShow(true);

      dispatch(setPassport(doc));
    }
  };
  const onClicOk = () => {
    dispatch(setCardType('front'));
    dispatch(setRetakeType(''));
    router.push('/camera_pic');
  };
  return (
    <DivMain>
      <Header onClick={onClickHeaderIcon} text={t['identity_document_verification']} />
      <WaterMarkText />
      <IdentificationStyled>
        <IdentificationTextStyled>{t['select_a_documemt']}</IdentificationTextStyled>
        <IdentificationSmallTextStyled>
          {t['you_will_take_a_picture_of_it_in_next_steps']}
        </IdentificationSmallTextStyled>
      </IdentificationStyled>
      <DocumentContainer>
        {document.map((doc, id) => (
          <>
            <Row onClick={() => onClickCard(id, doc?.name)}>
              <div className="col-1">{doc.Svg()}</div>
              <div className="col-10">
                <IdentifyText>{doc.name} </IdentifyText>
              </div>
              <DivGreaterIcon className="col-1">
                <GreaterThenIcon />
              </DivGreaterIcon>
            </Row>
            {id + 1 === document.length ? '' : <StyledLine />}
          </>
        ))}
        <MyVerticallyCenteredModal
          show={modalShow}
          onOk={onClicOk}
          onHide={() => setModalShow(false)}
          heading={t['video_kyc_would_like_to_access_the_camera']}
          paragraph={t['required_for_document_and_facial_capture']}
          dontAllow={t["don't_allow"]}
          ok={t['ok']}
        />
      </DocumentContainer>
    </DivMain>
  );
};

export default IdentityDocument;
