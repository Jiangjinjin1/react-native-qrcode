declare module "react-native-qrcode" {
  import { Component } from "react";

  export interface ModalProps {
    value?: string
    size?: number
    bgColor?: string
    fgColor?: string
  }

  class Modal extends Component<ModalProps> {}

  export default Modal;
}
