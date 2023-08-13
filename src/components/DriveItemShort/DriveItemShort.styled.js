import styled from "styled-components";
import { Link } from "react-router-dom";

export const DriveWrap = styled.div`
display: flex;
justify-content: space-between;
gap: 8px;
`;

export const DriveLinkWrap = styled(Link)`
  display: flex;
  gap: 16px;
  width: 1300px;
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: grey;
  }
`;

export const DeleteBtn = styled.button``;