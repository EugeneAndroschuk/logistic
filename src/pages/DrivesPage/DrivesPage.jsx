
import { Outlet } from "react-router-dom";
import Container from "../../styles/Container";

const DrivesPage = () => {
  return (
    <div>
      <Container>
        <Outlet/>
      </Container>
    </div>
  );
};

export default DrivesPage;
