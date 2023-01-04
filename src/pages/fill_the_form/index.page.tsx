import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import FieldInput from '@/components/core/FieldInput';

import { RadioIconChecked } from '@/assets/svg/radio_icon_checked copy';
import { RadioIconUnchecked } from '@/assets/svg/radio_icon_unchecked';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';
import { getTranslations } from '@/utils/helper';
import { ILanguage } from './index.types';
import {
  DivMain,
  FooterButtonStyle,
  DivForm,
  Divider,
  FormDescription,
  FormHeading,
  Options,
  OptionsSingle,
  OptionLabel,
  OptionRadioButton,
} from './index.styles';
/**
 *
 * @returns fill the form
 */
const FillTheForm = () => {
  const { selectedLanguage } = useAppSelector(getAppDataSelector);

  const t = getTranslations(selectedLanguage);
  const router = useRouter();

  const onClickHeaderIcon = () => {
    router.push('/commence_video');
  };

  const [OptionsList, setOptionList] = useState<ILanguage[]>([
    {
      label: t['aadhar_card'],
      checked: false,
    },
    {
      label: t['pan_card'],
      checked: false,
    },
    {
      label: t['driving_liscense'],
      checked: false,
    },
    {
      label: t['voter_id'],
      checked: false,
    },
    {
      label: t['passport'],
      checked: false,
    },
  ]);

  const onClickItem = (index: number) => {
    OptionsList.forEach((el) => {
      if (el.checked === true) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });
    const temp = [...OptionsList];
    if (temp[index].checked === true) {
      temp[index].checked = false;
    } else {
      temp[index].checked = true;
    }
    setOptionList(temp);
  };

  const onClickHandler = () => {
    router.push('/camera_pic');
  };
  return (
    <DivMain>
      <div>
        <Header text={t['fill_the_form']} onClick={onClickHeaderIcon} />
        <FieldInput
          placeholder={t['full_name']}
          name={'mobile'}
          className="my-2 mt-5 m-auto rounded border p-2 loginInput"
        />
        <FieldInput
          placeholder={t['mobile_number']}
          name={'mobile'}
          className="my-2 m-auto rounded border p-2 loginInput"
        />

        <Divider />

        <DivForm>
          <FormHeading>{t['select_id_documents']}</FormHeading>
          <FormDescription>{t['please_select_atleast_2_ID_documents_for_verification']}</FormDescription>
          <Options>
            {OptionsList.map(({ label, checked }, index) => {
              return (
                <OptionsSingle
                  key={index}
                  onClick={() => {
                    onClickItem(index);
                  }}
                >
                  <OptionLabel checkedLabel={checked}>{label}</OptionLabel>
                  <OptionRadioButton>
                    {checked === true ? <RadioIconChecked /> : <RadioIconUnchecked />}
                  </OptionRadioButton>
                </OptionsSingle>
              );
            })}
          </Options>
        </DivForm>
      </div>

      <FooterButtonStyle>
        <Button className="m-auto" onClick={onClickHandler}>
          {t['get_kyc']}
        </Button>
      </FooterButtonStyle>
    </DivMain>
  );
};

export default FillTheForm;
