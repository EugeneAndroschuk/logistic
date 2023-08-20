import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { getClientsByQuery } from "../../../redux/clients/clientsThunks";
import { getAllClientsSelector } from "../../../redux/clients/clientsSelectors";
import { ModalWrap } from "./ModalClientsList.styled";

const ModalClientsList = ({ toggleModal, onSelectClient }) => {
  const { allClients } = useSelector(getAllClientsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientsByQuery("page=1&limit=10"));
  }, [dispatch]);
    
    const onSelectItem = (name) => {
        onSelectClient(name);
        toggleModal();
    }

  return (
    <ModalWrap>
          <CloseIcon onClick={toggleModal} sx={{cursor: "pointer"}} />

      <ul>
        {allClients &&
          allClients.map((client) => (
            <li key={client._id} onClick={()=>onSelectItem(client.name)}>
              <p>{client.code}</p>
              <p>{client.name}</p>
              <p>{client.comments}</p>
            </li>
          ))}
      </ul>
    </ModalWrap>
  );
};

ModalClientsList.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  onSelectClient: PropTypes.func.isRequired,
};

export default ModalClientsList;
