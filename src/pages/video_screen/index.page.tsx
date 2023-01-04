import router from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toast } from 'react-bootstrap';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';
import { getTranslations } from '@/utils/helper';
import WaterMarkText from '@/components/core/WaterMarkText/WaterMarkText';
import { UploadVideo } from '@/store/app/appSlice';
import { COLORS } from '@/constants/colors';
import { DivBottom, DivMain, VideoCardStyled, VideoCardText } from './index.style';
/**
 *
 * @returns VideoScreen page
 */

const VideoScreen = () => {
  const { selectedLanguage, getVcipLink, uploadVideo, uploadVideoPending } = useAppSelector(getAppDataSelector);
  const t = getTranslations(selectedLanguage);
  const dispatch = useDispatch();
  const { recordedVideo } = useAppSelector(getAppDataSelector);
  const [vidoName, setVideName] = React.useState<any>();
  const [showA, setShow] = React.useState(false);
  React.useEffect(() => {
    const myFile = new File([recordedVideo], 'demo.mp4', { type: 'video/mp4' });
    setVideName(myFile);
  }, [recordedVideo]);
  const onClickHeaderIcon = () => {
    router.push('/camera_video');
  };

  const handleContinue = () => {
    setShow(true);
    const formData = new FormData();
    const key = getVcipLink.vcipkey;
    formData.append('file', vidoName);
    formData.append('vcipkey', key);
    formData.append('ftype', '.mp4');
    dispatch(
      UploadVideo({
        upload: formData,
      })
    );
  };
  useEffect(() => {
    if (uploadVideo?.respcode === '200') {
      router.push('/kyc_completed');
    }
  }, [uploadVideoPending]);

  const handleRetake = () => {
    router.push('/camera_video');
  };

  return (
    <DivMain>
      <Toast
        show={showA}
        autohide={true}
        onClose={() => {
          setShow(false);
        }}
        style={{ position: 'fixed', width: '90%', backgroundColor: COLORS.TOASTCOLOR }}
      >
        {uploadVideo?.respcode != '200' && uploadVideo?.respdesc?.length > 0 && (
          <Toast.Body>{uploadVideo.respdesc}</Toast.Body>
        )}
      </Toast>
      <div>
        <Header text={t['record_video']} onClick={onClickHeaderIcon} />
        <WaterMarkText />
        <VideoCardStyled>
          <video width="100%" controls playsInline>
            <source src={recordedVideo} type="video/mp4" />
          </video>
        </VideoCardStyled>
        <VideoCardText>
          {t['if_you_are_not_satified_with_your_selfie_video_we_suggest_you_to_re-take_it']}
        </VideoCardText>
      </div>
      <DivBottom>
        <Button className="mx-auto" onClick={handleContinue}>
          {t['submit_video']}
        </Button>
        <Button isTransparent={true} className="mx-auto btn" onClick={handleRetake}>
          {t['re_take_video']}
        </Button>
      </DivBottom>
    </DivMain>
  );
};
export default VideoScreen;
