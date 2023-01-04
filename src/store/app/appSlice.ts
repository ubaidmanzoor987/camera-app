import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetVcipLinkDetails, postDoAddharCard, postUploadVCIPRecordedVideo } from '@/services/appService';

import {
  appState,
  IcardData,
  IDoAddarCardOCR,
  IGetVcipLink,
  IUploadVideoResponse,
  IGetVcipLinkResponse,
  ISelecedColorData,
} from './types';

export const DoAddharCard = createAsyncThunk('app/do_addhar_card', async (data: { card: IcardData }) => {
  const { card } = data;
  const res = await postDoAddharCard(card);
  return res;
});

export const UploadVideo = createAsyncThunk('app', async (data: { upload: FormData }) => {
  const { upload } = data;
  const res = await postUploadVCIPRecordedVideo(upload);
  return res;
});

export const GetVcipLink = createAsyncThunk('app/get_vciplink', async (data: { upload: IGetVcipLink }) => {
  const { upload } = data;
  const res = await GetVcipLinkDetails(upload);
  return res;
});

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
  passport: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setVerificationStep: (state: appState, action: PayloadAction<number>) => {
      state.verificationStep = action.payload;
    },
    setRecordedVideo: (state: appState, action: PayloadAction<string>) => {
      state.recordedVideo = action.payload;
    },
    setCardFront: (state: appState, action: PayloadAction<string>) => {
      state.cardFront = action.payload;
    },
    setCardBack: (state: appState, action: PayloadAction<string>) => {
      state.cardBack = action.payload;
    },
    setCardType: (state: appState, action: PayloadAction<string>) => {
      state.cardType = action.payload;
    },
    setSelectedLanguage: (state: appState, action: PayloadAction<string>) => {
      state.selectedLanguage = action.payload;
    },
    setSelectedcolor: (state: appState, action: PayloadAction<ISelecedColorData>) => {
      state.selectedColor = action.payload;
    },
    setIsLanguageSelected: (state: appState, action: PayloadAction<boolean>) => {
      state.isLangugaeSelected = action.payload;
    },
    setVcipRef: (state: appState, action: PayloadAction<string>) => {
      state.vciprefId = action.payload;
    },
    setRetakeType: (state: appState, action: PayloadAction<string>) => {
      state.retakeType = action.payload;
    },
    setPassport: (state: appState, action: PayloadAction<string>) => {
      state.passport = action.payload;
    },
  },
  // redux thunk will be added in extraReducers
  extraReducers: (builder: ActionReducerMapBuilder<appState>) => {
    // Pending state of API
    builder.addCase(DoAddharCard.pending, (state) => {
      state.doAddharCardPending = true;
    });

    builder.addCase(DoAddharCard.fulfilled, (state, { payload }) => {
      state.doAddharCardPending = false;
      state.doAddharCard = payload;
    });

    builder.addCase(DoAddharCard.rejected, (state, { error }) => {
      state.doAddharCardPending = false;
      state.doAddharCard = {} as IDoAddarCardOCR;
      state.doAddharCardError = error.message;
    });
    builder.addCase(UploadVideo.pending, (state) => {
      state.uploadVideoPending = true;
    });

    builder.addCase(UploadVideo.fulfilled, (state, { payload }) => {
      state.uploadVideoPending = false;
      state.uploadVideo = payload;
    });

    builder.addCase(UploadVideo.rejected, (state, { error }) => {
      state.uploadVideoPending = false;
      state.uploadVideoError = error.message;
    });
    builder.addCase(GetVcipLink.pending, (state) => {
      state.getVcipLinkPending = true;
    });

    builder.addCase(GetVcipLink.fulfilled, (state, { payload }) => {
      state.getVcipLinkPending = false;
      state.getVcipLink = payload;
    });

    builder.addCase(GetVcipLink.rejected, (state, { error }) => {
      state.getVcipLinkPending = false;
      state.getVcipLinkError = error.message;
    });
  },
});

export const {
  setVerificationStep,
  setRecordedVideo,
  setCardFront,
  setCardBack,
  setCardType,
  setSelectedLanguage,
  setSelectedcolor,
  setIsLanguageSelected,
  setVcipRef,
  setRetakeType,
  setPassport,
} = appSlice.actions;

export default appSlice.reducer;
