import React from 'react';
import { DivLayout, DivWrapper, QRDiv, QRText, Divinstruction, IMGDiv, Li, QRHeading } from './index.styles';
function QRcodeText() {
  return (
    <DivWrapper>
      <DivLayout>
        <QRDiv>
          <Divinstruction>
            <QRHeading>Video KYC</QRHeading>
            <h1>Note:</h1>
            <ul>
              <Li>Please do not open the same link in multiple tabs</Li>
              <Li>Please ensure your internet connectivity is stable.</Li>
              <Li>Do not let your mobile screen go into sleep mode</Li>
              <Li>Enable camera, microphone and location settings on your device</Li>
              <Li>
                Do not refresh the page or access any other app, else, you will be logged out of the Video KYC process.
              </Li>
            </ul>
          </Divinstruction>

          <IMGDiv>
            {/* <QR src={'data:image/png;base64, ' + getVcipLink?.qrimage} alt="ok" /> */}
            <QRText>Please Scan this QR on your mobile and Complete the video KYC Process</QRText>
          </IMGDiv>
        </QRDiv>
      </DivLayout>
    </DivWrapper>
  );
}

export default QRcodeText;
