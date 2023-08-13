
import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/auth/authSelectors";
import { userLogout } from "../../redux/auth/authThunks";

const User = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getUserName);

    const onPressLogout = () => {
        dispatch(userLogout());
    }

    return (
      <div>
            <div>{currentUser}</div>
            <button type="button" onClick={onPressLogout}>Logout</button>
      </div>
    );
}

export default User;