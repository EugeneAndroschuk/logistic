import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userRefresh } from "./redux/auth/authThunks";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import DrivesPage from "./pages/DrivesPage/DrivesPage";
import ClientsPage from "./pages/ClientsPage/ClientsPage";
import DriveItemFormMain from "./components/DriveItemForm/DriveItemFormMain/DriveItemFormMain";
import ClientItemForm from "./components/ClientItemForm/ClientItemForm";
import ClientsList from "./components/ClientsList/ClientsList";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import GoogleAuth from "./components/GoogleAuth/GoogleAuth";

import RestrictedRoute from "./pages/routes/RestrictedRoute";
import PrivateRoute from "./pages/routes/PrivateRoute";

const routes = [
  {
    path: "/",
    element: <PrivateRoute component={SharedLayout} />,
    children: [
      {
        index: true,
        element: <PrivateRoute component={MainPage} />,
      },
      {
        path: "/drives",
        element: <PrivateRoute component={DrivesPage} />,
        children: [
          {
            path: "/drives/:driveId",
            element: <PrivateRoute component={DriveItemFormMain} />,
          },
          {
            path: "/drives/add",
            element: <PrivateRoute component={DriveItemFormMain} />,
          },
        ],
      },

      {
        path: "/clients",
        element: <PrivateRoute component={ClientsPage} />,
        children: [
          {
            index: true,
            path: "/clients",
            element: <PrivateRoute component={ClientsList} />,
          },
          {
            path: "/clients/:clientId",
            element: <PrivateRoute component={ClientItemForm} />,
          },
          {
            path: "/clients/add",
            element: <PrivateRoute component={ClientItemForm} />,
          },
        ],
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
  { path: "/googleauth", element: <GoogleAuth /> },
];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
