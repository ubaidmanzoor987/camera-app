import styled from '@emotion/styled';
import store from '@/store';
const style = store.getState().app.selectedColor;

export const StyledText = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
`;
export const DivHeader = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  .btn {
    padding: 0px 8px;
  }
  .btn-primary {
    background-color: ${style.button?.color};
    border-color: #e2ecf3;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
  }
  .text {
    background: linear-gradient(90deg, ${style.button?.text_color} 0%, ${style.button?.text_color} 85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
