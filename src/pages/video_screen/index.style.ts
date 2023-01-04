import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors';
export const DivMain = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-animation: fadeInUp 1 ease-in-out; /* Chrome, Safari, Opera */
  animation: fadeInUp 500ms ease-in-out;
  height: calc(100vh - 40px);
  .btn {
    margin-top: 20px;
  }
`;

export const VideoCardStyled = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const VideoCardText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-top: 30px;
  text-align: center;
  color: ${COLORS.GREY_12};
  opacity: 0.6;
`;

export const DivBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  margin-top: 9rem;
  opacity: 0.2;
  z-index: -1;
`;
