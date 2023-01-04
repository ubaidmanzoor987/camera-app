import styled from '@emotion/styled';
import store from '@/store';
const style = store.getState().app.selectedColor;
export const StyledText = styled.div<{ isLongText: boolean | undefined }>`
  ${({ isLongText }) =>
    isLongText
      ? `justify-content: flex-start; 
         margin-left: -8px;
         font-size: 19px !important; `
      : `justify-content: space-between;  
         text-align: center;`}
  font-style: normal;
  color: ${style.pagetitle_heading?.font_color};
  font-weight: 600;
  line-height: 30px;
  font-size: 20px;
`;

export const DivHeader = styled.div`
  .flex {
    display: flex;
    margin-bottom: 30px;
  }
`;
export const DivTitle = styled.div<{ isLongText: boolean | undefined }>`
  ${({ isLongText }) =>
    isLongText
      ? `width: 80%; 
       `
      : ``}
`;
export const DivIcon = styled.div<{ isLongText: boolean | undefined }>`
  ${({ isLongText }) => (isLongText ? `margin-top: 2px;` : ``)}
`;
