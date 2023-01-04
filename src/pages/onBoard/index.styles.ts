import styled from '@emotion/styled';

export const BixDiv = styled.div`
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
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
  margin-top: 10px;
  color: #0e86d4;
`;
export const DivLayout = styled.div`
  display: flex;

  padding: 2px;
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
export const Headpar = styled.p`
  text-align-center;
`;
export const DivScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
`;
export const StyledLine = styled.hr`
  opacity: 0.6;
  margin: 15px 5px 15px 0px;
  background-color: rgba(0, 0, 0, 0.1);
`;
export const GoogleSpan = styled.span`
  color: blue;

  font-weight: 600;
`;
export const TitleSpan = styled.span`
color:black
font-weight:700;
font-weight:bold;
 
`;
export const DivStepper = styled.span``;
export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5;
`;
export const DivIcon = styled.span`
  font-size: 30px;
`;
export const ContactDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #4169e1;
`;
export const ContactIcon = styled.span`
  font-size: 40px;
  color: white;
`;
