
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { getClientsByQuery } from "../../redux/clients/clientsThunks";
import Container from "../../styles/Container";
import { GoBackBtn, AddDriveBtn } from "./ClientsPage.styled";

const ClientsPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isClientsPage =
    pathname === "/clients" ? true : false; 

    useEffect(() => {
        const page = 1;
        const LIMIT_PER_PAGE = 10;


  let query = `page=${page}&limit=${LIMIT_PER_PAGE}`;

  dispatch(getClientsByQuery(query));
}, [dispatch]);

    return (
      <div>
        <Container>
          {!isClientsPage && <GoBackBtn to="/clients">go Back</GoBackBtn>}
          <Outlet />
          {isClientsPage && (
            <AddDriveBtn to="/clients/add">ADD CLIENT</AddDriveBtn>
          )}
        </Container>
      </div>
    );
}

export default ClientsPage;