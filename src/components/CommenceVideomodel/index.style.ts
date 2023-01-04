import styled from '@emotion/styled';
import { Modal } from 'react-bootstrap';
import { COLORS } from '@/constants/colors';
import store from '@/store';
const style = store.getState().app.selectedColor;
export const StyledAgreeParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${COLORS.GREY_600};
  margin: 0px;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const ParagraphText1Model = styled.span`
  font-weight: 600;
  color: black;
`;

export const BodyModalStyled = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  position: absolute;
  width: 370px;
  left: calc(50% - 370px / 2 + 0.5px);
  top: calc(100% - 650px / 2);
  background: rgba(0, 0, 0, 0.8);
  background: rgba(255, 255, 255);
  backdrop-filter: blur(54.3656px);
  padding: 15px;
  border-radius: 14px;

  @media (max-width: 340px) {
    width: 250px;
    left: calc(50% - 250px / 2 + 0.5px);
    top: calc(100% - 500px / 2);
  }
`;

export const StyledParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 0;
  margin-left: -3px;
  color: ${COLORS.GREY_600};
`;

export const CenterHeaderModel = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

export const AgreeButton = styled.button`
  color: #fff;
  font-weight: 600;
  // font-size: 15px;
  text-align: center;
  margin: 0 auto;
  outline: none;
  border: none;
  background-color: ${style?.button?.color};
  // background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
  //   linear-gradient(269.82deg, #38a1f7 0.1%, #38568f 99.85%);
  border-radius: 5px;
  // margin-left: 20px;
  padding: 10px;
  &:disabled {
    background-color: ${COLORS.GREY_90};
    cursor: not-allowed;
  }
`;

export const DisAgreeButton = styled.button`
  outline: none;
  background-color: ${COLORS.BLUE_600};
  border-color: ${COLORS.BLUE_600};
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  padding: 10px;
`;

export const DisAgreeText = styled.span`
  background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
`;

export const CrossButtonModel = styled.div`
  margin-right: -15px;
  margin-bottom: 18.88px;
  cursor: pointer;
  @media (max-width: 340px) {
    margin-right: -10px;
  }
`;
export const ButtonBorderModel = styled.p`
  width: 104px;
  margin-bottom: -10px;
  height: 40px;
  text-align: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(269.82deg, #38a1f7 0.1%, #38568f 99.85%);
  opacity: 0.1;
  border-radius: 5px;
  margin-bottom: -35px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;
export const CenterModel = styled(Modal)`
  & > div > div {
    border: none !important;
    cursor: pointer;
  }
  .modal-body {
    padding: 0px !important;
    margin-top: 10px;
  }
  .modal-footer {
    margin-top: 20px;
    width: 100%;
    padding: 0;
    flex-wrap: nowrap;
    border-top: 0px solid rgba(60, 60, 67, 0.29);
    display: flex;
    flex-direction: row;
  }
  .modal-header {
    width: 100%;
    height: 20px;
  }
  .modal-cont {
    border: none;
  }
`;
