
import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/auth/authSelectors";
import { userLogout } from "../../redux/auth/authThunks";
import { UserWrap, UserName, LogoutBtn } from "./User.styled";

const User = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getUserName);

    const onPressLogout = () => {
        dispatch(userLogout());
    }

    return (
      <UserWrap>
        <UserName>{currentUser}</UserName>
        <LogoutBtn type="button" onClick={onPressLogout}>
          Logout
        </LogoutBtn>
      </UserWrap>
    );
}

export default User;