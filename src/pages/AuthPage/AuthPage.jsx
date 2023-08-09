import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { googleAuth } from "../../redux/auth/authThunks";
import { setToken } from "../../redux/auth/authSlice";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";

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
    <>
      <h1>Authorization Page</h1>
      <Link to="/">go to Main page</Link>
      <RegisterForm />
      <LoginForm />
      <button type="button" onClick={() => console.log()}>
        GOOGLE SIGN IN
      </button>
      <button type="button" onClick={() => console.log()}>
        GOOGLE LOG OUT
      </button>
      <a href="https://logistics-db.onrender.com/api/users/google">
        Continue with Google
      </a>
    </>
  );
};

export default AuthPage;
