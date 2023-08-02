import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import StartPage from "./pages/StartPage";

const routes = [
  { path: "/header", element: <Header /> },
  { path: "/", element: <StartPage /> },
];

function App() {
  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  );
}

export default App;
