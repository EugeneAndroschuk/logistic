import PropTypes from "prop-types";

const ClientItemModal = ({ client }) => {
  return (
    <div>
      <ul>
        <li>
          <p>Code</p>
        </li>
        <li>
          <p>Name</p>
        </li>
        <li>
          <p>Comments</p>
        </li>
      </ul>
      <ul>
        <li>
          <p>{client.code}</p>
        </li>
        <li>
          <p>{client.name}</p>
        </li>
        <li>
          <p>{client.comments}</p>
        </li>
      </ul>
    </div>
  );
};

ClientItemModal.propTypes = {
  client: PropTypes.object.isRequired,
};

export default ClientItemModal;
