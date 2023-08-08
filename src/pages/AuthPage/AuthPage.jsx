import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const AuthPage = () => {
    return (
      <>
            <h1>Authorization Page</h1>
        <Link to="/">go to Main page</Link>
        <RegisterForm/>
      </>
    );
}

export default AuthPage;