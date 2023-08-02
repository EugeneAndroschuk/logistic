import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
      <>
            <Logo />
            <Link to="/" >go to Start page</Link>
      </>
    );
}

export default Header;