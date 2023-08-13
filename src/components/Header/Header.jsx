
import Container from "../../styles/Container";
import Logo from "../Logo/Logo";
import User from "../User/User";
import { MenuWrap } from "./Header.styled";

const Header = () => {
    return (
      <>
        <Container>
          <MenuWrap>
            <Logo />
            <User />
          </MenuWrap>
        </Container>
      </>
    );
}

export default Header;