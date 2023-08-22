import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { getClientsByQuery } from "../../../redux/clients/clientsThunks";
import { getAllClientsSelector } from "../../../redux/clients/clientsSelectors";
import {
  ModalWrap,
  HeadList,
  HedItem,
  ClientsList,
  ClientsItem,
  ClientsName,
} from "./ModalClientsList.styled";

const ModalClientsList = ({ toggleModal, onSelectClient }) => {
  const { allClients } = useSelector(getAllClientsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientsByQuery(""));
    // document.getElementsByTagName("div").click();
  }, [dispatch]);
    
    const onSelectItem = (name) => {
        onSelectClient(name);
        toggleModal();
    }

  return (
    <ModalWrap>
      <CloseIcon
        onClick={toggleModal}
        sx={{ cursor: "pointer", display: "block", marginLeft: "auto" }}
      />

      <HeadList>
        <HedItem>
          <p>Code</p>
        </HedItem>
        <HedItem>
          <p>Name</p>
        </HedItem>
        <HedItem>
          <p>Comments</p>
        </HedItem>
      </HeadList>

      <ClientsList>
        {allClients &&
          allClients.map((client) => (
            <ClientsItem
              key={client._id}
              onClick={() => onSelectItem(client.name)}
            >
              <ClientsName>{client.code}</ClientsName>
              <ClientsName>{client.name}</ClientsName>
              <ClientsName>{client.comments}</ClientsName>
            </ClientsItem>
          ))}
      </ClientsList>
    </ModalWrap>
  );
};

ModalClientsList.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  onSelectClient: PropTypes.func.isRequired,
};

export default ModalClientsList;
