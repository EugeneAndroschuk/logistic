
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-png.png";
import StyledLogo from "./Logo.styled";

const Logo = () => {
    const navigate = useNavigate();

    return <StyledLogo src={logo} alt="logo" onClick={()=>navigate("/")}/>
}

export default Logo;