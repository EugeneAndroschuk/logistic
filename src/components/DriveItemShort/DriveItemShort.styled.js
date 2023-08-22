import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropMenu = styled.div`
  position: absolute;
  top: 0;
  right: -24px;

  visibility: hidden;
  pointer-events: none;
`;

export const DriveWrap = styled.div`
  position: relative;
  // overflow: hidden;

  &:hover,
  &:focus {
    ${DropMenu} {
      visibility: visible;
      pointer-events: all;
    }
  }
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

  font-size: 16px;
`;



export const DeleteBtn = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:hover, &:focus {
    scale: 1.2;
  }
`;