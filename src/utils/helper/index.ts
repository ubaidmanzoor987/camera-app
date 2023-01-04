import { AxiosError } from 'axios';
import { translations, LANGUAGES } from '@/translations';

export const getErrorMessage = (json: AxiosError) => {
  return json?.response?.data?.message
    ? json?.response?.data?.message
    : json?.response?.data?.errors.length
    ? json?.response?.data?.errors
    : 'Error while processing your request';
};

export const useRouter = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return jest.spyOn(require('next/router'), 'useRouter');
};

export const removeAllEmptyData = (object: any) => {
  for (const key in object) {
    if (!object[key]) {
      // remove data if it's empty / undefined / null
      delete object[key];
    }
  }
  return object;
};

export const removeNumbersFromString = (data: string) => {
  return data.replace(/[^A-Za-z ]+/g, '');
};

export const isValidateEmail = (email: string | null) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

export const isValidPhoneNumber = (phone: string | null) =>
  String(phone).match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);

export const isObjectEmpty = (obj: object) => Object.keys(obj).length === 0;

export const getTranslations = (lang: LANGUAGES) => {
  return translations[lang];
};
