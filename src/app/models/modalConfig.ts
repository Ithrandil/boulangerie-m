export interface ModalConfig {
  data: ModalConfigData;
  disableClose: boolean;
  width: string;
  maxWidth: string;
}

export interface ModalConfigData {
  title: string;
  bodyText: string;
  buttonText?: string;
  buttonAction?: Function;
  extraCloseButton?: boolean;
}
