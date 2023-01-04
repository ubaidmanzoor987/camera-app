import styled from '@emotion/styled';

export const KycContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #9fbad5;
`;

export const KycHeading = styled.h1`
  text-align: left;
  margin-left: 60px;
  margin-top: 60px;
  //  font: normal normal 600 35px/53px Poppins;
  letter-spacing: 0px;
  font-size: 3em;
  font-weight: bold;
  color: #ffffff;
`;
export const KycDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #254282;
  height: auto;
  border-radius: 0;
  padding: 3em;
  border-radius: 20px 0 0px 20px;
  @media (max-width: 767px) {
    border-radius: 20px 20px 0px 0px;
  }
`;
export const QRDiv = styled.div`
  margin-top: 8em;
  height: 60vh;
`;
export const Li = styled.li`
  font-size: 1.5em;
  letter-spacing: 0px;
  color: #f2f2f2;
`;
export const Row = styled.div``;
export const ULDiv = styled.div``;
export const MobDiv = styled.div`
  background-color: white;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  font-family: inherit;
  border-radius: 0px 20px 20px 0px;
`;
export const IMG = styled.img`
  object-fit: cover;
  width: 80%;
  margin-left: 2em;
  left: 0;
  right: 0;
  opacity: 1;
  vertical-align: top;
`;

export const MobItems = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;

  width: 17em;
  justify-content: center;
  padding-bottom: 30px;
`;
export const QRHead = styled.h2`
  font-size: 1.2em;
  text-align: center;
  font-weight: bold;
  color: #254282;
`;
export const Note = styled.h2`
  top: 169px;
  left: 214px;
  width: 46px;
  height: 25px;
  text-align: left;
  font: normal normal normal 33px/37px Poppins;
  margin-bottom: 20px;
  letter-spacing: 0px;
  color: #c8cfe0;
  opacity: 1;
  font-family: inherit;
`;
export const CollectionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const QRPar = styled.p`
  @media (max-width: 992px) {
    font-size: 0.8em;
  }
  @media (max-width: 767px) {
    font-size: 0.9em;
  }
  font-size: 0.9em;
  font-weight: 600;
  text-align: center;
`;
export const OrPar = styled.p`
  font-size: 0.9em;
  text-align: center;
  color: #999999;
`;

export const Button = styled.button`
  width: 113px;
  height: 38px;
  background: #254282 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 3px #0000003d;
  color: #ffff;
  width: 6em;
  margin: 0 auto;
  border-radius: 6px;
  opacity: 1;
  border: none;
  &:hover {
    background-color: #3a5287;
  }
`;
export const ImgDiv = styled.div`
  margin: 0 auto;
`;
