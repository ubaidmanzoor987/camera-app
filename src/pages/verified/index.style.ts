import styled from '@emotion/styled';

export const DivMain = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 40px);
  -webkit-animation: fadeInUp 500ms ease-in-out; /* Chrome, Safari, Opera */
  animation: fadeInUp 500ms ease-in-out;
`;
export const VerificationStyled = styled.div`
  padding: 20px 0px;
  list-group-item: list-group-item-action;
`;
export const VerificationCardStyled = styled.div`
  text-align: center;
  margin-top: 5px;
`;
export const VerificationSuccessfulTextStyled = styled.p`
  margin-top: 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  margin-bottom: 0px !important;
`;
export const VerificationSuccessfulSmallTextStyled = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: 12px;
  text-align: center;
  color: #121212;
  opacity: 0.6;
  margin-bottom: 0px !important;
`;
export const DivBottom = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  padding-bottom: 20px;
`;
export const DivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IMG = styled.img`
  object-fit: cover;
  width: 100%;
  height: 35vh;
  opacity: 0.7;
  z-index: -1;
`;
export const ClientText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
  z-index: -1;
`;
export const DivContainer = styled.div`
  position: absolute;
  margin-top: 6rem;
  opacity: 0.2;
  z-index: -1;
`;
