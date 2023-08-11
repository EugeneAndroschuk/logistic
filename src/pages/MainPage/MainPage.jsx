
import { Link } from "react-router-dom";
import DriveList from "../../components/DriveList/DriveList";
import Container from "../../styles/Container";
import { MainPageWrap } from "./MainPage.styled";

const MainPage = () => {
    return (
      <MainPageWrap>
        <Container>
          <DriveList />
          <Link to="/adddrive">ADD DRIVE</Link>
        </Container>
      </MainPageWrap>
    );
}

export default MainPage;