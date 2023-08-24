import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { getClientsByQuery } from "../../../redux/clients/clientsThunks";
import { getAllClientsSelector } from "../../../redux/clients/clientsSelectors";
import {
  ModalWrap,
  ClientsContainer,
  HeadList,
  HedItem,
  HeadName,
  ClientsList,
  ClientsItem,
  ClientsName,
} from "./ModalClientsList.styled";

const ModalClientsList = ({ toggleModal, onSelectClient }) => {
  const { allClients } = useSelector(getAllClientsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientsByQuery(""));
  }, [dispatch]);
    
    const onSelectItem = (name) => {
        onSelectClient(name);
        toggleModal();
    }

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

      <ClientsContainer>
        <HeadList>
          <HedItem>
            <HeadName>Code</HeadName>
          </HedItem>
          <HedItem>
            <HeadName>Name</HeadName>
          </HedItem>
          <HedItem>
            <HeadName>Comments</HeadName>
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
      </ClientsContainer>
    </ModalWrap>
  );
};

ModalClientsList.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  onSelectClient: PropTypes.func.isRequired,
};

export default ModalClientsList;
