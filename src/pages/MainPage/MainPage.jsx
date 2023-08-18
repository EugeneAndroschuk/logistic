
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import DriveList from "../../components/DriveList/DriveList";
import Container from "../../styles/Container";
import FiltersMenu from "../../components/FiltersMenu/FiltersMenu";
import Overlay from "../../components/Overlay/Overlay";
import {
  MainPageWrap,
  DriveListWrap,
  AddDriveBtn,
  FilterMenuBtn,
  MenuWrap,
} from "./MainPage.styled";

const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nodeRef = useRef(null);

  const toggleModal = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const onSetQuery = (str) => {
    console.log(str);
  }
    return (
      <MainPageWrap>
        <DriveListWrap>
          <Container>
            <DriveList />
            <AddDriveBtn to="/adddrive">ADD DRIVE</AddDriveBtn>
            <FilterMenuBtn type="button" onClick={toggleModal}>
              FILTERS
            </FilterMenuBtn>

            {isMenuOpen && <Overlay toggleModal={toggleModal} />}

            <CSSTransition
              nodeRef={nodeRef}
              in={isMenuOpen}
              classNames="fade"
              timeout={250}
              unmountOnExit
            >
              <MenuWrap ref={nodeRef}>
                <FiltersMenu
                  toggleModal={toggleModal}
                  onSetQuery={onSetQuery}
                />
              </MenuWrap>
            </CSSTransition>

            {/* {isMenuOpen && <FiltersMenu toggleModal={toggleModal} />} */}
          </Container>
        </DriveListWrap>
      </MainPageWrap>
    );
}

export default MainPage;