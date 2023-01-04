import styled from '@emotion/styled';

export const DivMain = styled.div`
  margin: 20px 20px 0px 20px;
  height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;
export const StyledLine = styled.hr`
  opacity: 0.6;
  margin: 15px 5px 15px 0px;
  background-color: rgba(0, 0, 0, 0.1);
`;
export const StyledColor = styled.div`
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const DivSvg = styled.div`
  text-align: center;
`;
export const DivForm = styled.div`
  margin-top: 50px;
  text-align: center;
`;
export const FooterButtonStyle = styled.div`
  margin-top: 20px;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
`;
export const YesButtonStyle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1px;
  color: #121212;
  margin-left: -8px;
  opacity: 0.8;
`;
export const FormHeading = styled.h5`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;
export const FormDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #121212;
  opacity: 0.6;
`;

export const MainStyle = styled.div<{
  isChecked?: boolean;
}>`
  .customRadio input[type='radio'] {
    position: absolute;
    left: -9999px;
    font-size: 18px;
  }
  .customRadio input[type='radio'] + label {
    position: relative;
    padding: 19px 0 0 50px;
    cursor: pointer;
    color: #38568f;
    font-weight: 600;
  }
  .customRadio input[type='radio'] + label:before {
    content: '';
    background: #ffffff;
    border: ${({ isChecked }) =>
      isChecked
        ? `2px solid #38568f;
    `
        : '2px solid #38568f;'};
    margin-top: 10px;
    background-color: #ffffff;
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin-left: 10px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .customRadio input[type='radio'] + label:after {
    content: '';
    background: linear-gradient(180deg, #38568f 0%, #38a1f7 100%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 5px;
    margin-left: 9px;
    margin-top: 9px;
    opacity: 0;
    transform: scale(2);
    transition: transform 0.3s linear, opacity 0.3s linear;
  }
  .customRadio input[type='radio']:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`;
export const Divider = styled.hr`
  color: rgba(0, 0, 0, 0.7);
`;
export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OptionsSingle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;
export const OptionLabel = styled.p<{ checkedLabel?: boolean }>`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  ${({ checkedLabel }) =>
    checkedLabel
      ? `
  background: linear-gradient(180deg, #38568F 0%, #38A1F7 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
  `
      : 'color: #444444'}
`;
export const OptionRadioButton = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
