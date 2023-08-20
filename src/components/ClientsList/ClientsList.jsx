

import { useSelector } from "react-redux";
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

const ClientList = () => {
  const { allClients } = useSelector(getAllClientsSelector);

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

export default ClientList;
