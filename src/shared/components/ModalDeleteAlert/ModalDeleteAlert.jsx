import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { deleteDrive } from "../../../redux/drives/drivesThunks";
import {
    ModalWrap,
    HeadText,
    Text,
    BtnWrap,
    ActionBtn,
} from "./ModalDeleteAlert.styled";

const ModalDeleteAlert = ({ toggleModal, id}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDeleteAction = () => {
      dispatch(deleteDrive(id));
        toggleModal();
        navigate("/");
        
  };

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

      <HeadText>Delete this item ?</HeadText>

      <Text>A you shure you want to delete ? You can&apos;t undo this action</Text>

      <BtnWrap>
        <ActionBtn type="button" onClick={toggleModal}>
          Cancel
        </ActionBtn>
        <ActionBtn type="button" onClick={onDeleteAction}>Delete</ActionBtn>
      </BtnWrap>
    </ModalWrap>
  );
};

ModalDeleteAlert.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ModalDeleteAlert;
