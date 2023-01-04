import router from 'next/router';
import { useEffect, useRef, useState } from 'react';
import CameraBottomWithButton from '@/components/core/CameraBottomWithButton';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxTypedHooks';
import { setCardBack, setCardFront, setCardType } from '@/store/app/appSlice';
import { useUserMedia } from '@/hooks/useUserMedia';
import { getTranslations } from '@/utils/helper';
import { getAppDataSelector } from '@/store/app';
import {
  Canvas,
  DivCameraBox,
  DivMain,
  SmallTextStyled,
  DivCentered,
  TextStyled,
  Video,
  DivFlex,
} from './index.styles';

/**
 *
 * @returns Camera page
 */

const CameraPic = () => {
  const { selectedLanguage, cardType, retakeType, passport } = useAppSelector(getAppDataSelector);
  const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: 'environment' },
  };
  const dispatch = useAppDispatch();
  const t = getTranslations(selectedLanguage);
  const [isFront, setIsFront] = useState(cardType);
  const mediaStream = useUserMedia(CAPTURE_OPTIONS, isFront !== 'front');

  const videoRef = useRef(null) as any;
  const photoRef = useRef(null) as any;

  function handleCanPlay() {
    videoRef.current.play();
  }

  const handleCancel = () => {
    if (retakeType === 'front' || retakeType === 'back') {
      router.push('/aadhaar_card');
      return;
    }
    router.push('/identify_document');
  };

  const handleRetake = () => {
    // setIsFront(true);
  };

  const takePhoto = () => {
    const width = 314;
    const height = width / (16 / 9);
    const video = videoRef.current;
    const photo = photoRef.current as any;
    photo.width = width;
    photo.height = height;
    const ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = photo.toDataURL();
    if (isFront === 'front') {
      dispatch(setCardFront(dataUrl));
      handleClear();
      setIsFront('back');
      dispatch(setCardType('back'));
      if (retakeType === 'front') {
        router.push('/aadhaar_card');
      }
      return;
    }
    dispatch(setCardBack(dataUrl));
    router.push('/aadhaar_card');
  };

  useEffect(() => {
    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.setAttribute('autoplay', '');
      videoRef.current.setAttribute('muted', '');
      videoRef.current.setAttribute('playsinline', '');
      videoRef.current.srcObject = mediaStream;
    }
  }, [mediaStream]);

  function handleClear() {
    const context = photoRef.current.getContext('2d');
    context.clearRect(0, 0, photoRef.current.width, photoRef.current.height);
    videoRef.current.srcObject = null;
  }

  return (
    <DivMain>
      <DivCentered>
        <DivCameraBox>
          <Video ref={videoRef} onCanPlay={handleCanPlay} controls={false}></Video>
          <Canvas ref={photoRef}></Canvas>
        </DivCameraBox>
        {/* <TextStyled>{isFront === 'front' ? t['front_of_the_card'] : t['back_of_the_card']}</TextStyled> */}
        <TextStyled>{isFront === 'front' ? ` front of the ${passport}` : `back of the ${passport}`}</TextStyled>
        {/* <SmallTextStyled>
          {isFront === 'front'
            ? t['position_the_front_of_the_card_in_the_frame']
            : t['position_the_back_of_the_card_in_the_frame']}
        </SmallTextStyled> */}
        <SmallTextStyled>
          {isFront === 'front'
            ? `position the front of the ${passport} in the frame`
            : `position the back of the ${passport} in the frame`}
        </SmallTextStyled>
      </DivCentered>
      <DivFlex>
        <CameraBottomWithButton
          onClick={takePhoto}
          onCancel={handleCancel}
          onReTake={handleRetake}
          cancel={t['cancel']}
          retake={t['retake']}
          disAble
        />
      </DivFlex>
    </DivMain>
  );
};
export default CameraPic;
