
import { useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/authSelectors";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { UserWrap, UserName } from "./User.styled";

const User = () => {
    const currentUser = useSelector(getUserName);

  return (
    <UserWrap>
      <AccountBoxIcon fontSize="large" sx={{ color: "rgb(219, 167, 22)" }} />
      <UserName>{currentUser}</UserName>
    </UserWrap>
  );
};

export default User;
