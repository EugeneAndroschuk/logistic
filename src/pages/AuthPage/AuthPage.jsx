
import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { googleAuth } from "../../redux/auth/authThunks";
import { setToken } from "../../redux/auth/authSlice";
import { AuthPageWrap } from "./AuthPage.styled";

const AuthPage = () => {
  const [searchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { token } = params;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('срабатывает эффект')
    
    if (token) {
      console.log(token);
      dispatch(setToken({ token }));
      dispatch(googleAuth(token));
    }
  }, [dispatch, token]);

  return (
    <AuthPageWrap>
        <Outlet />
    </AuthPageWrap>
  );
};

export default AuthPage;
