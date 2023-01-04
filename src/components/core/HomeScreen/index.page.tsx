import React from 'react';
import Image from 'next/image';
import mobileSvg from '@/assets/svg/Mobile.svg';
import { getAppDataSelector } from '@/store/app';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';

import { Collection } from '@/assets/svg/colection';
import {
  KycContainer,
  IMG,
  QRDiv,
  KycDiv,
  KycHeading,
  ULDiv,
  Li,
  MobDiv,
  MobItems,
  Note,
  CollectionDiv,
  QRHead,
  QRPar,
  Button,
  ImgDiv,
  OrPar,
} from './index.styles';
const HomeScreen = () => {
  const { getVcipLink } = useAppSelector(getAppDataSelector);

  const handleCopy = () => {
    const url = location.href;
    navigator.clipboard.writeText(url);
  };

  return (
    <KycContainer>
      <QRDiv className="container">
        <div className="row">
          <KycDiv className="col-7 col-sm-12 col-md-7">
            <KycHeading>Video KYC</KycHeading>
            <Note>Note:</Note>
            <ULDiv>
              <ul style={{ listStyleType: 'disc' }}>
                <Li>
                  Do not refresh the page or access any other app,else, you will be logged out of the video kyc process.
                </Li>
                <Li>Please ensure your internet connectivity is stable.</Li>
                <Li>Enable camera,microphone and location settings on your device.</Li>
                <Li>Please Don't open the same link in multiple tabs.</Li>
                <Li>Do not let your mobile screen go into sleep mode.</Li>
              </ul>
            </ULDiv>
            <CollectionDiv>
              <Collection />
            </CollectionDiv>
          </KycDiv>
          <MobDiv className="col-5 col-sm-12 col-md-5">
            <Image style={{ border: '5px solid red' }} src={mobileSvg} />

            <MobItems>
              <QRHead>Scan QR Code</QRHead>
              <ImgDiv>
                <IMG src={'data:image/png;base64, ' + getVcipLink?.qrimage} />
              </ImgDiv>
              <QRPar>
                Please Scan this QR on your mobile
                <br /> and Complete the video KYC Process.
              </QRPar>
              <OrPar>or</OrPar>
              <Button onClick={handleCopy}>Copy Link</Button>
            </MobItems>
          </MobDiv>
        </div>
      </QRDiv>
    </KycContainer>
  );
};

export default HomeScreen;
