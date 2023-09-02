import { Link } from "react-router-dom";
import Container from "../../styles/Container";
import Logo from "../Logo/Logo";
import UserNav from "../UserNav/UserNav";
import { MenuWrap, NavLinkWrap, NavLinkStyled } from "./Header.styled";

const Header = () => {
  return (
    <>
      <Container>
        <MenuWrap>
          <Logo />
          <NavLinkWrap>
            <NavLinkStyled to="/">Main</NavLinkStyled>
            <NavLinkStyled to="/clients">Clients</NavLinkStyled>
          </NavLinkWrap>
          <UserNav />
        </MenuWrap>
      </Container>
    </>
  );
};

export default Header;
