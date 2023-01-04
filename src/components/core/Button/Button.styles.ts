import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';
import store from '@/store';
const style = store.getState().app.selectedColor;
export const ButtonStyled = styled.button<{
  backgroundColor?: string;
  hoverColor?: string;
  isTransparent?: boolean;
  CaretColor?: string;
}>`
  ${({ isTransparent, backgroundColor }) =>
    isTransparent
      ? ` background-color: rgb(226, 236, 243) ;
      width:100%;
      font-size:18px;
      height:48px;
      font-weight:600;
      letter-spacing: -0.4896000027656555px;
      color: ${style.caret_color}};
     
         border: none; `
      : `
  border: 0px;
  letter-spacing: -0.4896000027656555px;
  font-weight:600;
  border-radius:5px;
  font-size:20px;
  background-color: ${backgroundColor};

`}
  margin-left: 18px;
  margin-right: 18px;
  min-width: 100px;
  width: 100%;
  height: 48px;
  color: ${style?.button?.text_color}};
  border-radius:5px;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.4896000027656555px;
  padding-left: 25px;
  padding-right: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 5px;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  display: block;
  &:disabled {
    background-color: ${COLORS.GREY_90};
    cursor: not-allowed;
  }

`;
