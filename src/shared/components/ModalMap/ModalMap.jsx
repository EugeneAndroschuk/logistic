
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import Map from "../../../components/Map/Map";
import {
  ModalWrap,
} from "./ModalMap.styled";

const ModalMap = ({ toggleModal, center }) => {

  return (
    <ModalWrap>
      <CloseIcon
        onClick={toggleModal}
        sx={{
          cursor: "pointer",
          display: "block",
          marginLeft: "auto",
          marginBottom: "16px",
        }}
          />
          
      <Map center={center} />

      
    </ModalWrap>
  );
};

ModalMap.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  center: PropTypes.object.isRequired,
};

export default ModalMap;
