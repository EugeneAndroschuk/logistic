import styled from "styled-components";
import { Link } from "react-router-dom";

export const DriveWrap = styled.div`
position: relative;
overflow: hidden;
`;

export const DriveLinkWrap = styled(Link)`
  color: white;

  :hover,
  :focus {
    cursor: pointer;
    font-weight: 700;
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const DriveList = styled.ul`
display: flex;
`;

export const DriveItem = styled.li`
  text-align: center;
  border-right: 1px solid grey;
`;

export const DriveName = styled.p`
  width: 156px;
  padding: 5px 0px;

  //color: white;
  font-size: 16px;

  &:hover,
  &:focus {
    // color: black;
    
  }
`;

export const DropMenu = styled.div`
  position: absolute;
  top: 0;
  right: -90px;

  width: 100px;
  padding: 0px 12px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgba(255, 255, 255, 0.8);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateX(-90px);
  }
`;

export const DeleteBtn = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover, &:focus {
    scale: 1.2;
  }
`;