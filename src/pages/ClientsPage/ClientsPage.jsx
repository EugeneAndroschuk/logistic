
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getClientsByQuery } from "../../redux/clients/clientsThunks";
import ClientList from "../../components/ClientsList/ClientsList";
import Container from "../../styles/Container";

const ClientsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const page = 1;
        const LIMIT_PER_PAGE = 10;


  let query = `page=${page}&limit=${LIMIT_PER_PAGE}`;

  dispatch(getClientsByQuery(query));
}, [dispatch]);

    return (
      <div>
        <Container>
          <ClientList/>
        </Container>
      </div>
    );
}

export default ClientsPage;