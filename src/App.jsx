import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userRefresh } from "./redux/auth/authThunks";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import DrivePage from "./pages/DrivePage/DrivePage";
import AddDrivePage from "./pages/AddDrivePage/AddDrivePage";
import DriveDetails from "./pages/DriveDetails/DriveDetails";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const routes = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "/drives",
        element: <DrivePage />,
      },
      {
        path: "/drives/:driveId",
        element: <DriveDetails />,
      },
      {
        path: "/adddrive",
        element: <AddDrivePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        path: "/auth/register",
        element: <RegisterForm />,
      },
      {
        path: "/auth/login",
        element: <LoginForm />,
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
