import { styled } from "styled-components";

export const DriveListWrap = styled.div`
margin-bottom: 20px;
`;

export const DriveListHeader = styled.ul`
display: flex;
`;

export const HeaderItem = styled.li`
  width: 156px;

  &:last-child {
    width: 158px;
  }
  
  text-align: center;
  outline: 1px solid grey;
`;

export const HeaderItemName = styled.p`
  padding: 8px 0px;
  font-size: 18px;
  font-weight: 700;

  background-color: white;
  color: black;
`;

export const DriveListBody = styled.ul`
  background-color: rgba(255, 255, 255, 0.3);
`;

export const DriveItemShortWrap = styled.li`
height: 100%;
`;