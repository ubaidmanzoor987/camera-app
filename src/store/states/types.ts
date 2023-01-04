export type appState = {
  verificationStep: number;
  selectedLanguage: any;
  cardType: string | null;
  cardFront: string;
  cardBack: string;
  recordedVideo: string;
  doAddharCardPending: boolean;
  doAddharCard: IDoAddarCardOCR;
  selectedColor: ISelecedColorData;
  doAddharCardError: string | undefined;
  uploadVideoPending: boolean;
  uploadVideo: IUploadVideoResponse;
  uploadVideoError: string | undefined;
  getVcipLinkPending: boolean;
  getVcipLink: IGetVcipLinkResponse;
  getVcipLinkError: string | undefined;
  isLangugaeSelected: boolean;
  vciprefId: string;
  retakeType: string;
};
export interface IKYCDetails {
  name: string;
  fname: string;
  dob: string;
  gender: string;
  uid: string;
  pht: string;
  address: string;
  offlinekycgendate: string;
  kycdate: string;
}
export interface IDoAddarCardOCR {
  respcode: string;
  respdesc: string;
  rrn: string;
  kycdetails: IKYCDetails;
}

export interface IcardData {
  fimg: string;
  bimg: string;
  vcipkey: string;
  rrn: string;
}
export interface IGetVcipLink {
  vcipref: string;
}
export interface IUploadVideoResponse {
  respcode: string;
  respdesc: string;
}
export interface IGetVcipLinkResponse {
  respcode: string;
  respdesc: string;
  authkey: string;
  vcipkey: string;
  vcipid: string;
  cust_name: string;
  cust_mobile: string;
  vcipstatus: string;
  kycstatus: string;
  panstatus: string;
  videocallstatus: string;
  qrimage: string;
  clientname: string;
  colorcode: string;
  redirectflag: string;
  redirecturl: string;
  ref1: string;
  ref2: string;
  ref3: string;
  acclogo: string;
}

export interface IPageTitleHeading {
  font_color: string;
  header_tag: string;
  font_type: string;
  font_size: string;
}
export interface ISubHeading {
  font_color: string;
  header_tag: string;
  font_type: string;
  font_size: string;
}
export interface IBody {
  font_color: string;
  header_tag: string;
  font_type: string;
  font_size: string;
}
export interface IInputLabel {
  font_color: string;
  header_tag: string;
  font_type: string;
  font_size: string;
}
export interface IInputvalue {
  font_color: string;
  header_tag: string;
  font_type: string;
  font_size: string;
}
export interface IButton {
  color: string;
  text_color: string;
  font_type: string;
  font_size: string;
}
export interface IToaster {
  font_color: string;
  font_type: string;
  font_size: string;
}
export interface ISelecedColorData {
  global_font_family: string;
  pagetitle_heading: IPageTitleHeading;
  sub_heading: ISubHeading;
  body: IBody;
  input_label: IInputLabel;
  input_value: IInputvalue;
  input_box_size: string;
  checkbox_size: string;
  button: IButton;
  caret_color: string;
  tickmark_icon_color: string;
  radio_button_color: string;
  progressbar_color: string;
  list_bullet_point_color: string;
  close_button_color: string;
  toaster: IToaster;
}
