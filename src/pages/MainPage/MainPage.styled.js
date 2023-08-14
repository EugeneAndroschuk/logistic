import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainPageWrap = styled.div`
  height: 100%;
`;

export const DriveListWrap = styled.div`
  height: 600px;
  padding: 0px 16px;
  overflow-y: scroll;
`;

export const AddDriveBtn = styled(Link)`
  position: absolute;
  right: 30px;
  bottom: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  border: 3px solid rgb(111, 245, 66);
  background-color: rgba(111, 245, 66, 0.4);

  &:hover,
  &:focus {
    background-color: rgba(111, 245, 66, 0.6);
  }
`;

export const FilterMenuBtn = styled.button`
  position: absolute;
  right: 30px;
  bottom: 260px;

  width: 100px;
  height: 100px;

  border-radius: 50%;
  border: 3px solid rgb(111, 245, 66);
  background: rgba(111, 245, 66, 0.4);

  &:hover,
  &:focus {
    background-color: rgba(111, 245, 66, 0.6);
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