
import { Link } from "react-router-dom";
import Container from "../../styles/Container";
import Logo from "../Logo/Logo";
import UserNav from "../UserNav/UserNav";
import { MenuWrap } from "./Header.styled";

const Header = () => {
    return (
      <>
        <Container>
          <MenuWrap>
            <Logo />
            <Link to="/clients">Cliets page</Link>
            <UserNav />
          </MenuWrap>
        </Container>
      </>
    );
}

export default Header;