import PropTypes from "prop-types";
import cutItemNameLength from "../../utils/cutItemNameLength";
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
            <ClientName>{cutItemNameLength(client.name, 50)}</ClientName>
          </ClientItem>
          <ClientItem>
            <ClientName>{cutItemNameLength(client.comments, 40)}</ClientName>
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