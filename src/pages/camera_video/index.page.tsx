/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import router from 'next/router';

import { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { DoneIcon } from '@/assets/svg/done-icon';
import CameraBottomWithButton from '@/components/core/CameraBottomWithButton';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxTypedHooks';
import { setRecordedVideo } from '@/store/app/appSlice';
import { getTranslations } from '@/utils/helper';
import { getAppDataSelector } from '@/store/app';

import {
  DivCameraBox,
  DiveDone,
  DivMain,
  DivWords,
  SmallTextStyled,
  DivVideoStyled,
  TextStyled,
  Video,
  DivFlex,
  Canvas,
} from './index.styles';

/**
 *
 * @returns Verification page
 */

const Verification = () => {
  const { selectedLanguage } = useAppSelector(getAppDataSelector);
  const t = getTranslations(selectedLanguage);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [speech, setSpeech] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(60);
  const [startRecording, setStartRecording] = useState<boolean>(false);
  const [disAble, setisDisable] = useState<boolean>(false);
  const [words, setWords] = useState('');
  const [instruction, setInstruction] = useState<any>(t['position_your_face']);
  const [description, setDescriptoin] = useState<any>(
    t[`keep_your_face_within_the_oval_to_start_recording_and_follow_the_instructions`]
  );
  const videoRef = useRef<any>();
  let headInterval: any;
  const canvasRef: any = useRef(null);
  const [, setLoadingModald] = useState<boolean>();
  const [stopDetection, setstopDetection] = useState<boolean>(true);
  const [canvas, setCanvas] = useState<any>();
  const [, setStreamVideo] = useState<any>();
  const mediaRecorder: any = useRef(null);
  const [blobsRecorded, setBlobsRecorded] = useState<any>();
  const { transcript } = useSpeechRecognition();
  const dispatch = useAppDispatch();

  const getVideo = () => {
    if (navigator && navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({
          video: { width: 1920, height: 1080 },
          audio: true,
        })
        .then((stream) => {
          const video = videoRef.current as any;
          video.setAttribute('autoplay', '');
          video.setAttribute('muted', '');
          video.setAttribute('playsinline', '');
          video.srcObject = stream;
          video.play();
          setCanvas(canvasRef.current);
          setStreamVideo(video.srcObject);
          let blobData: any = [];
          try {
            mediaRecorder.current = new MediaRecorder(stream, {
              mimeType: 'video/webm',
            });
            mediaRecorder.current.addEventListener('dataavailable', function (e: any) {
              blobData.push(e.data);
            });
          } catch (error) {
            mediaRecorder.current = new MediaRecorder(stream, {
              mimeType: 'video/webm',
            });
            mediaRecorder.current.addEventListener('dataavailable', function (e: any) {
              blobData.push(e.data);
            });
          }

          setBlobsRecorded(blobData);
        })
        .catch((err) => {
          console.log('Error', err);
        });
    }
  };
  const sleep = (milliseconds: any) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);
  useEffect(() => {
    setLoadingModald(true);
    const loadModels = async () => {
      const MODEL_URL = 'https://justadudewhohacks.github.io/face-api.js/models';
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      ])
        .then(() => {
          console.log('Model loaded');
          setLoadingModald(false);
        })
        .catch((err) => {
          console.log('err in loading modals', err);
        });
    };
    loadModels();
  }, []);
  useEffect(() => {
    if (startRecording === true) {
      if (counter > 0) {
        const timer = setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }
      setStartRecording(false);
    }
  }, [startRecording, counter]);

  const handleCancel = () => {
    router.push('/verification');
  };

  const handleRetake = () => {};

  const handleOnClick = () => {
    setisDisable(true);
    if (mediaRecorder && mediaRecorder.current) {
      try {
        mediaRecorder.current.start(1000);
      } catch (err) {
        console.log('err', err);
      }
    }
    startVideoRecording();
  };
  function getTop(l: any) {
    return l.map((a: any) => a.y).reduce((a: any, b: any) => Math.min(a, b));
  }
  function getMeanPosition(l: any) {
    return l
      .map((a: any) => [a.x, a.y])
      .reduce((a: any, b: any) => [a[0] + b[0], a[1] + b[1]])
      .map((a: number) => a / l.length);
  }

  // const takePhoto = () => {
  //   const width = 314;
  //   const height = width / (16 / 9);
  //   const video = videoRef.current;
  //   const photo = canvasRef.current;
  //   photo.width = width;
  //   photo.height = height;
  //   const ctx = photo.getContext('2d');
  //   ctx.drawImage(video, 0, 0, width, height);
  //   const dataUrl = photo.toDataURL();
  //   return dataUrl;
  // };

  const rightDone = () => {
    setTimeout(() => {
      setstopDetection(false);
    }, 1000);
  };
  const detectFace = async () => {
    try {
      const referenceImage = await faceapi?.createCanvasFromMedia(videoRef?.current);
      await faceapi
        .detectSingleFace(referenceImage, new faceapi.TinyFaceDetectorOptions({ inputSize: 192 }))
        .withFaceLandmarks()
        .then((res): any => {
          // Face is detected
          if (res) {
            const dims = faceapi.matchDimensions(canvas, videoRef.current, true);

            const resizedResults = faceapi.resizeResults(res, dims);
            // if (true) {
            //     faceapi.draw.drawDetections(canvas, resizedResults);
            // }
            faceapi.draw.drawFaceLandmarks(canvas, resizedResults);
            // ? to clear canvas
            // ctx.clearRect(0, 0, video.videoWidth, video.videoHeight);

            const eye_right = getMeanPosition(res.landmarks.getRightEye());
            const eye_left = getMeanPosition(res.landmarks.getLeftEye());
            const nose = getMeanPosition(res.landmarks.getNose());
            const mouth = getMeanPosition(res.landmarks.getMouth());
            const jaw = getTop(res.landmarks.getJawOutline());

            const rx = (jaw - mouth[1]) / res.detection.box.height;
            const ry = (eye_left[0] + (eye_right[0] - eye_left[0]) / 2 - nose[0]) / res.detection.box.width;

            //   res.detection.score, //Face detection score
            //   ry, //Closest to 0 is looking forward
            //   rx // Closest to 0.5 is looking forward, closest to 0 is looking up
            // );

            let state = 'undetected';
            if (res.detection.score > 0.3) {
              state = 'front';

              if (rx > -0.2) {
                state = 'top';
              }

              if (rx < -0.5) {
                state = 'bottom';
              }

              if (ry < -0.04) {
                state = 'left';
                // setTimeout(leftDone, 2000);
              }
              if (ry > 0.04) {
                state = 'right';
              }
            }

            // ? capturing photo
            if (state === 'front') {
              // setTimeout(takePhoto, 100);
            }

            if (state === 'right') {
              setstopDetection(true);
              state = 'undetected';
              setTimeout(rightDone, 100);
            }
          } else {
            // Face was not detected
          }
        });
    } catch (e) {
      console.log(e);
      setTimeout(() => {
        stop();
      }, 5000);
    }
  };
  useEffect(() => {
    const element = document.getElementById('asdf');
    if (element != null && startRecording === true && counter !== 0) {
      if (stopDetection) {
        headInterval = setInterval(() => {
          detectFace();
        }, 10);
        return () => clearInterval(headInterval);
      }
      setTimeout(faceDone, 2000);
    }
  }, [startRecording, stopDetection]);

  const startVideoRecording = () => {
    setIsDone(false);
    setTimeout(() => {
      setInstruction(t['instruction_1']);
      setDescriptoin(t['look_over_your_right_shoulder_and_back']);
    }, 3000);
    setStartRecording(true);
  };

  const faceDone = () => {
    setIsDone(true);
    setTimeout(startWord, 2000);
  };

  const startWord = () => {
    setIsDone(false);
    const number = Math.random() * 10;
    const number1 = Math.random() * 10;
    const number2 = Math.random() * 10;
    const number3 = Math.random() * 10;

    setWords(`${Math.round(number)} - ${Math.round(number1)} - ${Math.round(number2)} - ${Math.round(number3)}`);
    setInstruction(t['instruction_2']);
    setDescriptoin(t['say_each_digit_out_loud']);
    setSpeech(true);
  };

  const Recording = async () => {
    setSpeech(false);
    for (let i = 0; i < counter; i++) {
      SpeechRecognition.startListening();
      const val = words?.trim()?.replace(/\D/g, '');
      setSpeech(true);
      await sleep(5000);
      if (val === transcript) {
        stop();
      }
    }
  };
  useEffect(() => {
    if (speech === true) {
      Recording();
    }
  }, [speech, transcript]);

  const stop = () => {
    SpeechRecognition?.stopListening();
    try {
      mediaRecorder?.current?.stop();
    } catch (err) {
      console.log('err', err);
    }
    setIsDone(true);
    setTimeout(() => {
      dispatch(setRecordedVideo(URL.createObjectURL(new Blob(blobsRecorded, { type: 'video/mp4' }))));
      router.push('/video_screen');
    }, 3000);
  };

  return (
    <DivMain>
      <DivVideoStyled>
        <DivCameraBox background={isDone}>
          <Video id="asdf" ref={videoRef} isDone={isDone} muted></Video>
          <DiveDone>{isDone && <DoneIcon />}</DiveDone>
          {stopDetection === true && <Canvas ref={canvasRef} id="sasdf"></Canvas>}
        </DivCameraBox>
        <TextStyled>{instruction}</TextStyled>
        <SmallTextStyled>{description}</SmallTextStyled>
        <DivWords>{words.length > 0 && words}</DivWords>
      </DivVideoStyled>
      <DivFlex>
        <CameraBottomWithButton
          isVideo
          onClick={handleOnClick}
          onCancel={handleCancel}
          onReTake={handleRetake}
          counter={`00:00:${counter}`}
          cancel={t['cancel']}
          retake={t['retake']}
          disAble={disAble}
        />
      </DivFlex>
    </DivMain>
  );
};

export default Verification;
