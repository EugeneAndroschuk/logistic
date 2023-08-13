
import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import closeSvg from "../../assets/icons/close-outline.svg";
import { CSSTransition } from "react-transition-group";
import { FiltersMenuWrap, CloseBtn } from "./FiltersMenu.styled";

// const FiltersMenu = ({ toggleModal }) => {
//   const onCloseModal = useCallback(
//       (e) => {
//           console.log(e.target);
//           console.log(e.currentTarget);
//           console.log(e.code);
//       if (e.target === e.currentTarget || e.code === "Escape") {
//         toggleModal();
//       }
//     },
//     [toggleModal]
//   );

//   useEffect(() => {
//     window.addEventListener("keydown", onCloseModal);
//     document.body.style.overflow = "hidden";

//     return () => {
//       window.removeEventListener("keydown", onCloseModal);
//       document.body.style.overflow = "auto";
//     };
//   }, [onCloseModal]);
    
//     return (
//       <FiltersMenuWrap >
//         <CloseBtn src={closeSvg} onClick={onCloseModal}/>
//       </FiltersMenuWrap>
//     );
// };

// FiltersMenu.propTypes = {
//   toggleModal: PropTypes.func.isRequired,
// };

// export default FiltersMenu;



const FiltersMenu = ({ toggleModal }) => {
    return (
      <FiltersMenuWrap>
        <CloseBtn src={closeSvg} onClick={toggleModal} />
      </FiltersMenuWrap>
    );
};

FiltersMenu.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default FiltersMenu;