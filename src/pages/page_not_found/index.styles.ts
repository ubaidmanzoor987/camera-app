import styled from '@emotion/styled';
import store from '@/store';
const style = store.getState().app.selectedColor;
export const BixDiv = styled.div`
  max-width: 330px;
  margin: 20px 20px 0px 20px;
  height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  -webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */
  animation: fadeInUp 500ms ease-in-out;
`;
export const DivWrapper = styled.div`
  width: 100%;
  align-self: center;
`;
export const DivHeading = styled.div`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  color: ${style.pagetitle_heading?.font_color};
  text-align: center;
  margin-top: 104px;
`;
export const DivLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
`;
export const DivHomeButton = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 22px;
`;
export const DivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
export const IMG = styled.img`
  object-fit: cover;
  width: 100%;
  height: 35vh;
  opacity: 0.1;
  z-index: -1;
`;
export const ClientText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivContainer = styled.div`
  position: absolute;
  margin-top: 8rem;
  opacity: 0.7;
  z-index: -1;
`;
