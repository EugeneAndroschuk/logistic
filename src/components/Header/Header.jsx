
import Container from "../../styles/Container";
import Logo from "../Logo/Logo";
import UserNav from "../UserNav/UserNav";
import LanguageList from "../LanguageList/LanguageList";
import { useTranslation } from "react-i18next";
import {
  MenuWrap,
  NavLinkWrap,
  NavLinkStyled,
  UserWrap,
} from "./Header.styled";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Container>
        <MenuWrap>
          <Logo />
          <NavLinkWrap>
            <NavLinkStyled to="/">
              {t("components.Header.LinkToMain")}
            </NavLinkStyled>
            <NavLinkStyled to="/clients">
              {t("components.Header.LinkToClients")}
            </NavLinkStyled>
          </NavLinkWrap>
          <UserWrap>
            <UserNav />
            <LanguageList />
          </UserWrap>
        </MenuWrap>
      </Container>
    </>
  );
};

export default Header;
