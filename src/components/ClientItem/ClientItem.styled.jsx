import styled from "styled-components";
import { Link } from "react-router-dom";

export const ClientWrap = styled.div`
 
`;

export const ClientLinkWrap = styled(Link)`
  color: white;

  :hover,
  :focus {
    // cursor: pointer;
    font-weight: 700;
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const ClientList = styled.ul`
  display: flex;
`;

export const ClientItem = styled.li`
  text-align: center;
  border-right: 1px solid grey;
`;

export const ClientName = styled.p`
  width: 156px;
  padding: 5px 0px;

  font-size: 16px;
`;