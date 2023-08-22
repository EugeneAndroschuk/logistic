import { styled } from "styled-components";

export const ClientListWrap = styled.div`
  margin-bottom: 20px;
`;

export const ClientListHeader = styled.ul`
  display: flex;
`;

export const HeaderItem = styled.li`
  &:nth-child(1) {
    width: 100px;
  }

  &:nth-child(2) {
    width: 650px;
  }

  &:nth-child(3) {
    width: 500px;
  }

  text-align: center;
  border-right: 1px solid grey;
`;

export const HeaderItemName = styled.p`
  // width: 156px;
  
  padding: 8px 0px;
  font-size: 18px;
  font-weight: 700;

  background-color: white;
  color: black;
`;

export const ClientListBody = styled.ul`
  background-color: rgba(255, 255, 255, 0.3);
`;

export const ClientItemWrap = styled.li`
  height: 100%;
`;
