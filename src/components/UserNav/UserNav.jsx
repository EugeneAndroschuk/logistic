
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/auth/authThunks";
import User from "../User/User";
import { UserNavWrap, LogoutBtn } from "./UserNav.styled";

const UserNav = () => {
    const dispatch = useDispatch();

    const onPressLogout = () => {
        dispatch(userLogout());
    }

    return (
      <UserNavWrap>
        <User/>
        <LogoutBtn type="button" onClick={onPressLogout}>
          Logout
        </LogoutBtn>
      </UserNavWrap>
    );
}

export default UserNav;