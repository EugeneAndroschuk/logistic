import { Link } from "react-router-dom";
import Container from "../../styles/Container";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
      <>
        <Container>
          <Logo />
          <Link to="/auth">go to Authorization page</Link>
        </Container>
      </>
    );
}

export default Header;