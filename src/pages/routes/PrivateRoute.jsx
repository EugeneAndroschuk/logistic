import { Navigate } from "react-router-dom";
import {
  getUserIsLoggedIn,
  getUserIsRefreshing,
} from "../../redux/auth/authSelectors";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, redirectTo = "/auth/login" }) => {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const isRefreshing = useSelector(getUserIsRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
