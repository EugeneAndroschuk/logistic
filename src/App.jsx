import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import DrivePage from "./pages/DrivePage/DrivePage";
import DriveDetails from "./pages/DriveDetails/DriveDetails";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";

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
    ],
  },
  { path: "/auth", element: <AuthPage /> },
];

function App() {
  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  );
}

export default App;
