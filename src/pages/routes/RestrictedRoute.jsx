import { Navigate } from "react-router-dom";
import { getUserIsLoggedIn } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
    const isLoggedIn = useSelector(getUserIsLoggedIn);
    
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};

export default RestrictedRoute;