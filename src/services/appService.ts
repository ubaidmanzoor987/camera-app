// eslint-disable-next-line camelcase
import { API_DoAAdHAAROCR, API_GetVcipLinkDetails, API_UploadVCIPRecordedVideo } from '@/constants/api';
import { IcardData, IGetVcipLink } from '@/store/app/types';

import { postRequestFormData, postRequestWithToken } from './utils';

export const postDoAddharCard = async (card: IcardData) => {
  // eslint-disable-next-line camelcase
  const response = await postRequestWithToken(`${API_DoAAdHAAROCR}`, card);
  return response.data;
};
export const postUploadVCIPRecordedVideo = async (upload: FormData) => {
  // eslint-disable-next-line camelcase
  const response = await postRequestFormData(`${API_UploadVCIPRecordedVideo}`, upload);
  return response.data;
};

export const GetVcipLinkDetails = async (upload: IGetVcipLink) => {
  // eslint-disable-next-line camelcase
  const response = await postRequestWithToken(`${API_GetVcipLinkDetails}`, upload);
  return response.data;
};
