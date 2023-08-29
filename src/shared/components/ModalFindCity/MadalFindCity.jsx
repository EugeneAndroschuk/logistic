import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { getClientsByQuery } from "../../../redux/clients/clientsThunks";
import { getAllClientsSelector } from "../../../redux/clients/clientsSelectors";
import {
  ModalWrap,
} from "./MadalFindCity.styled";

const ModalFindCity = ({ toggleModal }) => {
  const { allClients } = useSelector(getAllClientsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientsByQuery(""));
  }, [dispatch]);

  const onSelectItem = () => {
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

      <input />

      <button type="button">Find</button>

      <ul></ul>
    </ModalWrap>
  );
};

ModalFindCity.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default ModalFindCity;
