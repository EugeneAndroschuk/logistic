import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoBackBtn = styled(Link)`
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 116px;
  padding: 8px 0px;

  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  color: white;

  border-radius: 10px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.3);

  &:hover,
  &:focus {
    font-weight: 700;
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
