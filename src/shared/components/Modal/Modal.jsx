import { createPortal } from "react-dom";
import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { ModalOverlay } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ toggleModal, children }) => {
  const onCloseModal = useCallback(
    (e) => {
      if (e.target === e.currentTarget || e.code === "Escape") {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", onCloseModal);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onCloseModal);
      document.body.style.overflow = "auto";
    };
  }, [onCloseModal]);

  return createPortal(
    <ModalOverlay onClick={onCloseModal}>
      {children}
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
