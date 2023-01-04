import router from 'next/router';

import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import Toast from 'react-bootstrap/Toast';
import platform from 'platform';
import Button from '@/components/core/Button';
import { COLORS } from '@/constants/colors';
import {
  GetVcipLink,
  // setGeoData,
  setSelectedcolor,
  setVcipRef,
} from '@/store/app/appSlice';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';
import WaterMarkText from '@/components/core/WaterMarkText/WaterMarkText';
import FullscreenLoader from '@/components/core/FullscreenLoader';
import MyCommenceCenteredModal from '@/components/CommenceVideomodel';
import HomeScreen from '@/components/core/HomeScreen/index.page';
import PermissionScreen from '@/components/PermissionScreen/index.page';
import { BixDiv, DivHeading, DivHomeButton, DivLayout, DivWrapper } from './index.styles';

const Home = () => {
  const dispatch = useDispatch();
  const { getVcipLink, getVcipLinkPending, vciprefId } = useAppSelector(getAppDataSelector);
  const url = window.location.href;
  const vcipref = url.split('=')[1];
  const [showA, setShowA] = React.useState(false);
  const [modalShow, setModalShow] = React.useState<boolean>(false);
  const [cameraPermission, setCameraPermission] = React.useState<boolean>(false);
  const [browserName, setBrowserName] = React.useState<string>();
  const [browserVersion, setBrowserVersion] = React.useState<any>();
  const width = window.innerWidth;
  const StatusCodesList = {
    VCIPSTATUS_PENDING: '1',
    VCIPSTATUS_UNDERREVIEW: '2',
    VCIPSTATUS_ONHOLDBYAGENT: '3',
    VCIPSTATUS_COMPLETED: '4',
    VCIPSTATUS_REJECTED: '5',
    PANSTATUS: '1', // SUCCESS DATA
  };
  const permissions = () => {
    if (navigator && navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({
          video: { width: 1920, height: 1080 },
          audio: true,
        })
        .then(() => setCameraPermission(false))
        .catch(() => {
          setCameraPermission(true);
          // Need to implement Permission screen
        });
    }
  };

  const isDisabled =
    Object.values(getVcipLink)?.length > 0 &&
    getVcipLink?.vcipstatus !== StatusCodesList.VCIPSTATUS_UNDERREVIEW &&
    getVcipLink?.vcipstatus !== StatusCodesList.VCIPSTATUS_ONHOLDBYAGENT &&
    getVcipLink?.vcipstatus !== StatusCodesList.VCIPSTATUS_COMPLETED
      ? false
      : true;

  useEffect(() => {
    dispatch(setVcipRef(vcipref));
  }, []);

  useEffect(() => {
    if (vciprefId) {
      dispatch(
        GetVcipLink({
          upload: {
            vcipref: vciprefId,
          },
        })
      );
    }
  }, [vciprefId]);

  useEffect(() => {
    if (!vcipref) {
      router.push('/page_not_found');
    }
    setBrowserName(platform.name);
    const number = platform.version?.toString();
    setBrowserVersion(number?.split('.')[0]);
    permissions();
  }, []);

  useEffect(() => {
    if (
      (browserName === 'Chrome' && Number(browserVersion) < 70) ||
      (browserName === 'Safari' && Number(browserVersion) < 12)
    ) {
      router.push('/onBoard');
    }
  }, [browserName, browserVersion]);

  const toggleShowA = () => {
    setShowA(false);
  };
  const handleStarted = () => {
    setModalShow(true);
  };

  React.useEffect(() => {
    if (getVcipLink.colorcode) {
      let base64ToString = Buffer.from(getVcipLink?.colorcode, 'base64').toString();
      base64ToString = JSON.parse(base64ToString);
      const colorString = JSON.stringify(base64ToString);
      const colors = JSON.parse(colorString);
      // console.log('colors', colors);
      dispatch(setSelectedcolor(colors));
    }
  }, [getVcipLink]);

  const onAgree = () => {
    router.push('/language');

    setTimeout(() => {
      setShowA(true);
    }, 5000);
  };
  const onDisAgree = () => {
    setModalShow(false);
  };
  return (
    <>
      {cameraPermission ? (
        <PermissionScreen />
      ) : (
        <BixDiv>
          {getVcipLinkPending ? (
            <FullscreenLoader />
          ) : (
            <>
              {width < 600 ? (
                <>
                  <DivWrapper>
                    <Toast
                      show={showA}
                      autohide={true}
                      onClose={toggleShowA}
                      style={{ position: 'fixed', width: '90%', backgroundColor: COLORS.TOASTCOLOR }}
                    >
                      {getVcipLink?.respcode !== '200' && getVcipLink?.respdesc?.length > 0 && (
                        <Toast.Body>{getVcipLink?.respdesc}</Toast.Body>
                      )}
                    </Toast>
                    <DivLayout>
                      <DivHeading>Video KYC</DivHeading>

                      <WaterMarkText />
                    </DivLayout>
                  </DivWrapper>

                  <DivHomeButton>
                    <Button onClick={handleStarted} disabled={isDisabled} className="m-auto fw-bold">
                      Get Started
                    </Button>
                  </DivHomeButton>
                </>
              ) : (
                <HomeScreen />
              )}
            </>
          )}
          <MyCommenceCenteredModal show={modalShow} onAgree={onAgree} onDisagree={onDisAgree} onHide={onDisAgree} />
        </BixDiv>
      )}
    </>
  );
};

export default Home;
