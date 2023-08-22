
import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { ModalOverlay } from "./Overlay.styled";

const Overlay = ({ toggleModal }) => {
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
      document.getElementById('filterbtn').blur();
    };
  }, [onCloseModal]);

  return <ModalOverlay onClick={onCloseModal} />
};

export default Overlay;

Overlay.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
