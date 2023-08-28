import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getClientsByQuery } from "../../redux/clients/clientsThunks";
import { getAllClientsSelector } from "../../redux/clients/clientsSelectors";
import Client from "../ClientItem/ClientItem";

import {
  ClientListWrap,
  ClientListHeader,
  HeaderItem,
  HeaderItemName,
  ClientListBody,
  ClientItemWrap,
  PaginationWrap,
} from "./ClientsList.styled";

const ClientsList = () => {
  const [page, setPage] = useState(1);
  const { allClients, total } = useSelector(getAllClientsSelector);
  const dispatch = useDispatch();
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
    let query = `page=${page}&limit=${LIMIT_PER_PAGE}`;
    dispatch(getClientsByQuery(query));
  }, [dispatch, page]);

  return (
    <>
      <ClientListWrap>
        <ClientListHeader>
          <HeaderItem>
            <HeaderItemName>Code</HeaderItemName>
          </HeaderItem>
          <HeaderItem>
            <HeaderItemName>Name</HeaderItemName>
          </HeaderItem>
          <HeaderItem>
            <HeaderItemName>Comments</HeaderItemName>
          </HeaderItem>
        </ClientListHeader>
        <ClientListBody>
          {allClients &&
            allClients.map((client) => (
              <ClientItemWrap key={client._id}>
                <Client client={client} />
              </ClientItemWrap>
            ))}
        </ClientListBody>
      </ClientListWrap>
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
    </>
  );
};

export default ClientsList;
