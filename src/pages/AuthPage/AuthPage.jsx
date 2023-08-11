import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { googleAuth } from "../../redux/auth/authThunks";
import { setToken } from "../../redux/auth/authSlice";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Container from "../../styles/Container";
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
    if (token) {
      dispatch(setToken({ token }));
      dispatch(googleAuth(token));
    }
  }, [dispatch, token]);

  return (
    <AuthPageWrap>
      {/* <Container> */}
        <Link to="/">go to Main page</Link>
        {/* <RegisterForm />
      <LoginForm /> */}
        {/* <GoogleBtn href="https://logistics-db.onrender.com/api/users/google">
          <GoogleIcon></GoogleIcon>
          Sign In with Google
        </GoogleBtn> */}
        <Outlet />
      {/* </Container> */}
    </AuthPageWrap>
  );
};

export default AuthPage;
