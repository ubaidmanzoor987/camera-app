import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { CrossIcon } from '@/assets/svg/crossIcon';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import { getTranslations } from '@/utils/helper';
import { getAppDataSelector } from '@/store/app';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import {
  BodyModalStyled,
  CenterModel,
  CenterHeaderModel,
  CrossButtonModel,
  StyledRow,
  StyledParagraph,
  AgreeButton,
  StyledAgreeParagraph,
} from './index.style';

interface Props {
  show?: boolean;
  onAgree?: any;
  onHide?: any;
  onDisagree?: any;
}

function MyCommenceCenteredModal({ show, onAgree, onHide }: Props) {
  const { getVcipLink, selectedLanguage } = useAppSelector(getAppDataSelector);
  const t = getTranslations(selectedLanguage);
  const [btn, setBtn] = useState(false);
  return (
    <CenterModel className="modal-cont" show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <BodyModalStyled>
        <Modal.Header>
          <CenterHeaderModel className="col-11">{t['user_consent']}</CenterHeaderModel>
          <CrossButtonModel className="col-1" onClick={onHide}>
            <CrossIcon />
          </CrossButtonModel>
        </Modal.Header>
        <Modal.Body>
          <StyledAgreeParagraph>{t['by_clicking_on_agree_you_hereby']}</StyledAgreeParagraph>
          <StyledRow>
            <div className="col-1">
              <GreaterThenIcon />
            </div>
            <div className="col-11">
              <StyledParagraph>
                {t['Your_video_interaction_session_with_the_Banker_will_be_in_the_recording_mode']}
              </StyledParagraph>
            </div>
          </StyledRow>
          <StyledRow>
            <div className="col-1">
              <GreaterThenIcon />
            </div>
            <div className="col-11">
              <StyledParagraph>
                {t['a_live_photograph_will_be_captured_during_the_video_interaction_session_with_the_banker']}
              </StyledParagraph>
            </div>
          </StyledRow>
          <StyledRow>
            <div className="col-1">
              <GreaterThenIcon />
            </div>
            <div className="col-11">
              <StyledParagraph>
                {t['your_aadhaar_details_will_be_used_for_aadhaar_verification_in_the_v_cip_process']}
              </StyledParagraph>
            </div>
          </StyledRow>
          <StyledRow>
            <div className="col-1">
              <GreaterThenIcon />
            </div>
            <div className="col-11">
              <StyledParagraph>
                {t['a_photograph_of_your_pan_card_will_be_collected_to_perform_pan_verification_in_the_vcip_process']}
              </StyledParagraph>
            </div>
          </StyledRow>
          <StyledRow>
            <div className="col-1">
              <GreaterThenIcon />
            </div>
            <div className="col-11">
              <StyledParagraph>{t['your_live_location_will_be_captured_in_the_v_cip_process']}</StyledParagraph>
            </div>
          </StyledRow>
          <StyledRow>
            <div className="col-1">
              <GreaterThenIcon />
            </div>
            <div className="col-11">
              <StyledParagraph>
                {t['you_should_ensure_all_the_details_are_correct_during_the_video_interaction_session']}
              </StyledParagraph>
            </div>
          </StyledRow>
          <StyledRow>
            <div className="col-1">
              <GreaterThenIcon />
            </div>
            <div className="col-11">
              <StyledParagraph>
                {t['the_aadhaar_xml_packet_or_aadhaar_secure_qr_code_should_not_be_older_than_3_days']}
              </StyledParagraph>
            </div>
          </StyledRow>
          <StyledRow>
            <div className="col-1">
              <input
                type="checkbox"
                onChange={() => {
                  setBtn(!btn);
                }}
              />
            </div>
            <div className="col-11">
              <StyledParagraph>{`${getVcipLink?.cust_name} with the VCIP - ${getVcipLink?.vcipid} agrees with all the above mentioned points and hereby,confirm my consent`}</StyledParagraph>
            </div>
          </StyledRow>
        </Modal.Body>
        <Modal.Footer>
          <AgreeButton onClick={onAgree} disabled={btn ? false : true}>
            {t['proceed']}
          </AgreeButton>
        </Modal.Footer>
      </BodyModalStyled>
    </CenterModel>
  );
}
export default MyCommenceCenteredModal;
