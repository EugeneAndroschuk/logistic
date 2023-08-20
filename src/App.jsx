import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userRefresh } from "./redux/auth/authThunks";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import AddDrivePage from "./pages/AddDrivePage/AddDrivePage";
import DriveDetailsPage from "./pages/DriveDetailsPage/DriveDetailsPage";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ClientsPage from "./pages/ClientsPage/ClientsPage";
import ClientDetailsPage from "./pages/ClientDetailsPage/ClientDetailsPage";
import RestrictedRoute from "./pages/routes/RestrictedRoute";
import PrivateRoute from "./pages/routes/PrivateRoute";

const routes = [
  {
    path: "/",
    element: <PrivateRoute component={SharedLayout} />,
    children: [
      { index: true, element: <PrivateRoute component={MainPage} /> },
      {
        path: "/drives/:driveId",
        element: <PrivateRoute component={DriveDetailsPage} />,
      },
      {
        path: "/adddrive",
        element: <PrivateRoute component={AddDrivePage} />,
      },
      {
        path: "/clients",
        element: <PrivateRoute component={ClientsPage} />,
      },
      {
        path: "/clients/:clientId",
        element: <PrivateRoute component={ClientDetailsPage} />,
      },
    ],
  },
  {
    path: "/auth",
    element: <RestrictedRoute component={AuthPage} />,
    children: [
      {
        path: "/auth/register",
        element: <RestrictedRoute component={RegisterForm} />,
      },
      {
        path: "/auth/login",
        element: <RestrictedRoute component={LoginForm} />,
      },
    ],
  },
];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
