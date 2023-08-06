import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import DrivePage from "./pages/DrivePage/DrivePage";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";

const routes = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "/drives/:driveId",
        element: <DrivePage />,
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
