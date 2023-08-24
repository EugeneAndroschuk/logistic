
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getClientsByQuery } from "../../redux/clients/clientsThunks";
import { getAllClientsSelector } from "../../redux/clients/clientsSelectors";
import Client from "../ClientItem/ClientItem";

import {
  ClientListWrap,
  ClientListHeader,
  HeaderItem,
  HeaderItemName,
  ClientListBody,
  ClientItemWrap,
} from "./ClientsList.styled";

const ClientsList = () => {
  const { allClients } = useSelector(getAllClientsSelector);
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getClientsByQuery(""));
  }, [dispatch]);

  return (
    <ClientListWrap>
      <ClientListHeader>
        <HeaderItem>
          <HeaderItemName>Code</HeaderItemName>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemName>Name</HeaderItemName>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemName>Comments</HeaderItemName>
        </HeaderItem>
      </ClientListHeader>
      <ClientListBody>
        {allClients &&
          allClients.map((client) => (
            <ClientItemWrap key={client._id}>
              <Client client={client} />
            </ClientItemWrap>
          ))}
      </ClientListBody>
    </ClientListWrap>
  );
};

export default ClientsList;
