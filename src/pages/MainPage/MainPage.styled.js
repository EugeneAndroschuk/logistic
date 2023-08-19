import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainPageWrap = styled.div`
  height: 100%;
`;

export const DriveListWrap = styled.div`
  height: 570px;
  // padding: 0px 16px;
  // overflow-y: auto;
`;

export const PaginationWrap = styled.div`
display: flex;
justify-content: center;
`;

export const AddDriveBtn = styled(Link)`
  position: absolute;
  right: 10px;
  bottom: 50px;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 116px;
  padding: 8px 0px;
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

export const FilterMenuBtn = styled.button`
  position: absolute;
  right: 10px;
  bottom: 100px;

  padding: 8px 0px;
  width: 116px;
  font-size: 16px;
  font-weight: 700;
  color: white;

  border-radius: 10px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.3);

  &:hover,
  &:focus {
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const MenuWrap = styled.div`
  &.fade-enter {
    transform: translateX(100%);
  }

  &.fade-enter-active {
    transform: translateX(0%);
    transition: transform 250ms;
  }

  &.fade-exit {
    transform: translateX(0%);
  }

  &.fade-exit-active {
    transform: translateX(100%);
    transition: transform 250ms;
  }

  position: fixed;
  top: 0;
  right: 0;

  z-index: 3;
`;