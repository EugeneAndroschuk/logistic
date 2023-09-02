
import { Outlet, useLocation } from "react-router-dom";
import Container from "../../styles/Container";
import { GoBackBtn, AddClientBtn } from "./ClientsPage.styled";

const ClientsPage = () => {
  const { pathname } = useLocation();
  const isClientsPage = pathname === "/clients" ? true : false;

  return (
    <div>
      <Container>
        {!isClientsPage && <GoBackBtn to="/clients">go Back</GoBackBtn>}
        <Outlet />
        {isClientsPage && (
          <AddClientBtn to="/clients/add">ADD CLIENT</AddClientBtn>
        )}
      </Container>
    </div>
  );
};

export default ClientsPage;
