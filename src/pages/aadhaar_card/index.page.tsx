import router from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Spinner, Toast } from 'react-bootstrap';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import HeadingWithButton from '@/components/core/HeadingWithButton';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';
import { getTranslations } from '@/utils/helper';
import WaterMarkText from '@/components/core/WaterMarkText/WaterMarkText';
import { DoAddharCard, setCardType, setRetakeType } from '@/store/app/appSlice';
import { COLORS } from '@/constants/colors';
import { DivBottom, DivCard, DivHomeButton, DivMain } from './index.styles';

/**
 *
 * @returns AadhaarCard page
 */

const AadhaarCard = () => {
  const { cardFront, cardBack, getVcipLink, doAddharCardPending, doAddharCard, passport } =
    useAppSelector(getAppDataSelector);
  const dispatch = useDispatch();
  const { selectedLanguage } = useAppSelector(getAppDataSelector);
  const t = getTranslations(selectedLanguage);
  const rrn = Math.floor(+new Date() / 1000).toString();
  const [showA, setShow] = useState(false);
  const handleBack = () => {
    router.push('/verification');
  };
  const handleContinue = () => {
    setShow(true);
    dispatch(
      DoAddharCard({
        card: {
          bimg: cardBack.slice(22),
          fimg: cardFront.slice(22),
          vcipkey: getVcipLink.vcipkey,
          rrn,
        },
      })
    );
  };
  useEffect(() => {
    if (doAddharCard?.respcode === '200') {
      router.push('/verification');
    }
  }, [doAddharCardPending]);

  const onClickRetake = (type: string) => {
    dispatch(setRetakeType(type));
    dispatch(setCardType(type));
    router.push('/camera_pic');
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
        {doAddharCard?.respcode != '200' && doAddharCard?.respdesc?.length > 0 && (
          <Toast.Body>{doAddharCard.respdesc}</Toast.Body>
        )}
      </Toast>
      <div>
        {/* <Header text={t['aadhaar_card']} onClick={handleBack} /> */}
        <Header text={passport} onClick={handleBack} />
        <WaterMarkText />
        <HeadingWithButton
          // text={t['aadhaar_card_front_side']}
          text={passport + ' front side'}
          retake={t['retake']}
          onClick={() => onClickRetake('front')}
        />
        <DivCard>
          <img src={cardFront} width="100%" height="205px" />
        </DivCard>
        <HeadingWithButton
          // text={t['aadhaar_card_back_side']}
          text={passport + ' back side'}
          retake={t['retake']}
          onClick={() => onClickRetake('back')}
        />
        <DivCard>
          <img src={cardBack} width="100%" height="205px" />
        </DivCard>
        <DivBottom>{`make sure that your ${passport} details are clear to read with no blur or glare`} </DivBottom>
      </div>
      <DivHomeButton>
        {doAddharCardPending ? (
          <Spinner animation={'border'} />
        ) : (
          <Button className="m-auto" onClick={handleContinue}>
            {t['continue']}
          </Button>
        )}
      </DivHomeButton>
    </DivMain>
  );
};

export default AadhaarCard;
