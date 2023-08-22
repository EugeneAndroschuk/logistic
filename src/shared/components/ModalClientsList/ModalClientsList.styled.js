import styled from "styled-components";

export const ModalWrap = styled.div`
width: 615px;
height: 400px;
padding: 10px;
border-radius: 10px;

background-color: white;
`;

export const HeadList = styled.ul`
display: flex;
`;

export const HedItem = styled.li`
  border: 1px solid black;

  &:nth-child(1) {
    width: 100px;
  }

  &:nth-child(2) {
    width: 300px;
  }

  &:nth-child(3) {
    width: 180px;
  }
`;

export const ClientsList = styled.ul`
height: 300px;
overflow-Y: scroll;
//   display: flex;
`;

export const ClientsItem = styled.li`
  display: flex;

//   padding-top: 5px;
//   padding-bottom: 5px;

  &:hover,
  &:focus {
    background-color: grey;
  }
`;

export const ClientsName = styled.p`

padding: 5px;


  &:nth-child(1) {
    width: 100px;
  }

  &:nth-child(2) {
    width: 300px;
  }

  &:nth-child(3) {
    width: 180px;
  }
`;