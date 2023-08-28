
import { Outlet, useLocation } from "react-router-dom";
import Container from "../../styles/Container";
import { GoBackBtn } from "./DrivesPage.styled";

const DrivesPage = () => {
  const { pathname } = useLocation();
  const isDrivesPage = pathname === "/drives" ? true : false; 
  return (
    <div>
      <Container>
        {!isDrivesPage && <GoBackBtn to="/">go Back</GoBackBtn>}
        <Outlet />
      </Container>
    </div>
  );
};

export default DrivesPage;
