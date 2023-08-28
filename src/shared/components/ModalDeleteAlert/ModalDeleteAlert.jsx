import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { deleteDrive } from "../../../redux/drives/drivesThunks";
import { deleteClient } from "../../../redux/clients/clientsThunks";
import {
  ModalWrap,
  HeadText,
  Text,
  BtnWrap,
  ActionBtn,
} from "./ModalDeleteAlert.styled";

const ModalDeleteAlert = ({ toggleModal, itemId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteAction = () => {
    
    if (itemId.clientId) {
      dispatch(deleteClient(itemId.clientId));
      navigate("/clients");
    }
    else {
      dispatch(deleteDrive(itemId.driveId));
      navigate("/");
    }
      
    toggleModal();
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

      <Text>
        A you shure you want to delete ? You can&apos;t undo this action
      </Text>

      <BtnWrap>
        <ActionBtn type="button" onClick={toggleModal}>
          Cancel
        </ActionBtn>
        <ActionBtn type="button" onClick={onDeleteAction}>
          Delete
        </ActionBtn>
      </BtnWrap>
    </ModalWrap>
  );
};

ModalDeleteAlert.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  itemId: PropTypes.object.isRequired,
};

export default ModalDeleteAlert;
