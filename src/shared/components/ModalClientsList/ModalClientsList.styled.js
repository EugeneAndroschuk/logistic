import styled from "styled-components";

export const ModalWrap = styled.div`
width: 740px;
// height: 400px;
padding: 20px;
border-radius: 10px;

background-color: white;
`;

export const ClientsContainer = styled.div`
  width: 650px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  border: 1px solid rgb(219, 167, 22);
  box-shadow: -2px 2px 5px rgb(219, 167, 22);
`;

export const HeadList = styled.ul`
  display: flex;
  background-color: rgba(219, 167, 22, 0.5);
`;

export const HedItem = styled.li`
  border: 2px solid rgb(219, 167, 22);
  text-align: center;

  &:nth-child(1) {
    width: 150px;
  }

  &:nth-child(2) {
    width: 300px;
  }

  &:nth-child(3) {
    width: 200px;
  }
`;

export const HeadName = styled.p`
  font-weight: 700;
  padding: 5px;
`;

export const ClientsList = styled.ul`
height: 400px;
overflow-Y: scroll;
//   display: flex;
`;

export const ClientsItem = styled.li`
  display: flex;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: rgba(219, 167, 22, 0.2);
  }
`;

export const ClientsName = styled.p`

padding: 5px;


  &:nth-child(1) {
    width: 150px;
  }

  &:nth-child(2) {
    width: 300px;
  }

  &:nth-child(3) {
    width: 120px;
  }
`;