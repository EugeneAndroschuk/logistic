import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";
import { SharedLayoutWrap } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <SharedLayoutWrap>
      <Header />
      <main>
        <Outlet />
      </main>
    </SharedLayoutWrap>
  );
};

export default SharedLayout;
