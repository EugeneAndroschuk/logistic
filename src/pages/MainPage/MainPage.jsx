
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { getUserIsLoggedIn } from "../../redux/auth/authSelectors";
import { getAllDrivesSelector } from "../../redux/drives/drivesSelectors";
import { getDrivesByQuery } from "../../redux/drives/drivesThunks";
import DriveList from "../../components/DriveList/DriveList";
import Container from "../../styles/Container";
import FiltersMenu from "../../components/FiltersMenu/FiltersMenu";
import Overlay from "../../components/Overlay/Overlay";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  MainPageWrap,
  DriveListWrap,
  PaginationWrap,
  AddDriveBtn,
  FilterMenuBtn,
  MenuWrap,
} from "./MainPage.styled";


const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [queryFilters, setQueryFilters] = useState(null);
  const [page, setPage] = useState(1);
  const { total } = useSelector(getAllDrivesSelector);
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  const LIMIT_PER_PAGE = 18;


  const pageQuantity = total ? Math.ceil(total / LIMIT_PER_PAGE) : 0;

  const theme = createTheme({
    components: {
      MuiPagination: {
        styleOverrides: {
          root: {
            button: {
              color: "#fff",
              "&.Mui-selected": {
                backgroundColor: "rgba(255,255,255,0.3)",
              },
            },
          },
        },
      },
    },
  });

  useEffect(() => {
    if (!isLoggedIn) return;

    let query = `page=${page}&limit=${LIMIT_PER_PAGE}`;

    if (queryFilters) {
      query = query.concat(queryFilters);
    }

    dispatch(getDrivesByQuery(query));
  }, [dispatch, isLoggedIn, page, queryFilters]);

  const toggleModal = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onSetQuery = (str) => {
    setQueryFilters(str);
    setPage(1);
  };

  return (
    <MainPageWrap>
      <Container>
        <DriveListWrap>
          <DriveList />
        </DriveListWrap>
        <PaginationWrap>
          <ThemeProvider theme={theme}>
            {pageQuantity > 1 && (
              <Pagination
                count={pageQuantity}
                page={page}
                onChange={(_, num) => setPage(num)}
                variant="outlined"
                shape="rounded"
              />
            )}
          </ThemeProvider>
        </PaginationWrap>

        <AddDriveBtn to="/drives/add">ADD DRIVE</AddDriveBtn>
        <FilterMenuBtn id="filterbtn" type="button" onClick={toggleModal}>
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
            <FiltersMenu toggleModal={toggleModal} onSetQuery={onSetQuery} />
          </MenuWrap>
        </CSSTransition>
      </Container>
    </MainPageWrap>
  );
}

export default MainPage;