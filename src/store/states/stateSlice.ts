import { createSlice } from '@reduxjs/toolkit';
import { appState, IDoAddarCardOCR, IUploadVideoResponse, IGetVcipLinkResponse, ISelecedColorData } from './types';

export const initialState: appState = {
  verificationStep: 0,
  selectedLanguage: 'en',
  cardType: null,
  cardFront: '',
  cardBack: '',
  recordedVideo: '',
  doAddharCardPending: false,
  doAddharCard: {} as IDoAddarCardOCR,
  doAddharCardError: '',
  uploadVideo: {} as IUploadVideoResponse,
  uploadVideoPending: false,
  uploadVideoError: '',
  getVcipLinkPending: false,
  getVcipLink: {} as IGetVcipLinkResponse,
  getVcipLinkError: '',
  selectedColor: {} as ISelecedColorData,
  isLangugaeSelected: false,
  vciprefId: '',
  retakeType: '',
};

const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {},
  // redux thunk will be added in extraReducers
  extraReducers: () => {
    // Pending state of API
  },
});

// export const {} = stateSlice.actions;

export default stateSlice.reducer;
