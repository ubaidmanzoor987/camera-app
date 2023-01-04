import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WaterMarkText from '@/components/core/WaterMarkText/WaterMarkText';
import { TickIcon } from '@/assets/svg/tick-icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import { getAppDataSelector, setSelectedLanguage } from '@/store/app';
import { LANGUAGES } from '@/translations';
import { StyledLine, StyledLanguage, Row, DivMain, DivMarginTop, FooterButtonStyle } from './index.styles';

/**
 *
 * @returns Language page
 */

export interface ILanguage {
  name: string;
  isActive: boolean;
  code: LANGUAGES;
}

const ChooseLangugae = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { selectedLanguage, vciprefId } = useSelector(getAppDataSelector);

  const [langugaes, setLanguages] = useState<ILanguage[]>([
    {
      name: 'English',
      isActive: false,
      code: LANGUAGES.ENGLISH,
    },
    {
      name: 'Hindi',
      isActive: false,
      code: LANGUAGES.HINDI,
    },
    {
      name: 'Telugu',
      isActive: false,
      code: LANGUAGES.TELUGU,
    },
    {
      name: 'Kannada',
      isActive: false,
      code: LANGUAGES.KANNADA,
    },
    {
      name: 'Tamil',
      isActive: false,
      code: LANGUAGES.TAMIL,
    },
    {
      name: 'Malayalam',
      isActive: false,
      code: LANGUAGES.Malayalam,
    },
    {
      name: 'Punjabi',
      isActive: false,
      code: LANGUAGES.Punjabi,
    },
    {
      name: 'Marathi',
      isActive: false,
      code: LANGUAGES.Marathi,
    },
    {
      name: 'Gujarati',
      isActive: false,
      code: LANGUAGES.Gujarati,
    },
    {
      name: 'Bengali',
      isActive: false,
      code: LANGUAGES.BANGALI,
    },
  ]);

  const onClickHeaderIcon = () => {
    router.push('/?d=' + vciprefId);
  };

  const onClickItem = (ind: number) => {
    langugaes.forEach((lang: { isActive: boolean }) => {
      lang.isActive = false;
    });
    const temp = [...langugaes];
    temp[ind].isActive = true;
    setLanguages(temp);
    dispatch(setSelectedLanguage(langugaes[ind].code));
  };

  const handleContinue = () => {
    router.push('/verification');
  };

  useEffect(() => {
    const ind = langugaes.findIndex((a) => a.code === selectedLanguage);
    if (ind > -1) {
      const temp = [...langugaes];
      temp[ind].isActive = true;
      setLanguages(temp);
    }
  }, []);

  return (
    <DivMain>
      <div>
        <Header text="Choose a Language" onClick={onClickHeaderIcon} />
        <WaterMarkText />

        <DivMarginTop>
          {langugaes.map(({ name, isActive }, ind) => (
            <React.Fragment key={ind}>
              <Row onClick={() => onClickItem(ind)}>
                <div className="col-11">
                  <StyledLanguage isActive={isActive}>{name}</StyledLanguage>
                </div>
                <div className="col-1">{isActive && <TickIcon />}</div>
              </Row>
              {ind + 1 === langugaes.length ? '' : <StyledLine />}
            </React.Fragment>
          ))}
        </DivMarginTop>
      </div>
      <FooterButtonStyle>
        <Button isBottom onClick={handleContinue} className="m-auto fw-bold">
          Continue
        </Button>
      </FooterButtonStyle>
    </DivMain>
  );
};

export default ChooseLangugae;
