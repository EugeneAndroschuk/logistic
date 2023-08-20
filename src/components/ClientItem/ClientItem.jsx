import PropTypes from "prop-types";
import {
  ClientWrap,
  ClientLinkWrap,
  ClientList,
  ClientItem,
  ClientName,
} from "./ClientItem.styled";

const Client = ({ client }) => {

  return (
    <ClientWrap>
      <ClientLinkWrap to={`/clients/${client._id}`}>
        <ClientList>
          <ClientItem>
            <ClientName>{client.code}</ClientName>
          </ClientItem>
          <ClientItem>
            <ClientName>{client.name}</ClientName>
          </ClientItem>
          <ClientItem>
            <ClientName>{client.comments}</ClientName>
          </ClientItem>
        </ClientList>
      </ClientLinkWrap>
    </ClientWrap>
  );
};

Client.propTypes = {
  client: PropTypes.object.isRequired,
};

export default Client;