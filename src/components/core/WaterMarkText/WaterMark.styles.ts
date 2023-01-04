import styled from '@emotion/styled';
import store from '@/store';
const style = store.getState().app.selectedColor;
export const IMG = styled.img`
  object-fit: cover;
  width: 50%;
  height: auto;
  opacity: 0.1;
  vertical-align: top;
  z-index: -1;
`;
export const ClientText = styled.h3`
  text-align: center;
  opacity: 0.4;
  z-index: -1;
  color: ${style?.caret_color};
`;
export const DivContainer = styled.div`
  position: absolute;

  opacity: 0.7;
  top: 30%;
  left: 0;
  right: 0;
  margin-right: 0;
  margin-left: 0;
  display: flex;
  align-items: center;
  // margin:0 auto;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
  z-index: -1;
`;
