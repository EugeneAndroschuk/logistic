
import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleAuth } from "../../redux/auth/authThunks";
import { setToken } from "../../redux/auth/authSlice";
import Loader from "src/components/Loader/Loader";
import { getUserIsRefreshing } from "../../redux/auth/authSelectors";
import { AuthPageWrap } from "./AuthPage.styled";

const AuthPage = () => {
  const [searchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { token } = params;
  const dispatch = useDispatch();
  const isUserRefreshing = useSelector(getUserIsRefreshing);

  useEffect(() => {
    
    if (token) {
      dispatch(setToken({ token }));
      dispatch(googleAuth(token));
    }
  }, [dispatch, token]);

  return (
    <AuthPageWrap>{isUserRefreshing ? <Loader /> : <Outlet />}</AuthPageWrap>
  );
};

export default AuthPage;
