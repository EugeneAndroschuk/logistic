import styled from "styled-components";
import { Link } from "react-router-dom";

export const DriveWrap = styled.div`
  position: relative;
`;

export const DriveLinkWrap = styled(Link)`
  color: white;

  :hover,
  :focus {
    cursor: pointer;
    font-weight: 700;
    color: black;
    background-color: rgb(219, 167, 22);
  }
`;

export const DriveList = styled.ul`
display: flex;
`;

export const DriveItem = styled.li`
  width: 156px;

  &:last-child {
    width: 158px;
  }

  text-align: center;
  outline: 1px solid grey;
`;

export const DriveName = styled.p`
  padding: 5px 0px;

  font-size: 16px;
`;
