import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/Modal";
import {
  CusModal,
  CusModalBody,
  CusModalHeader,
  CusModalTail,
} from "../commons/Modal";

function LoginModal(props) {
  const [modalOpened, setModalOpened] = useRecoilState(modalState);

  const handleClick = () => {
    setModalOpened(false);
  };

  return (
    <CusModal>
      <CusModalHeader>Error!</CusModalHeader>
      <CusModalBody>{props.msg}</CusModalBody>
      <CusModalTail clickSuccess={handleClick} cancelVisible={false} />
    </CusModal>
  );
}

export default LoginModal;
