import styled from "styled-components";

export const FiltersMenuWrap = styled.div`
  width: 450px;
  height: 100vh;

  padding:16px;
  background-color: rgb(230,230,230);
`;

export const CloseBtn = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
  margin-left: auto;
`;

export const DateWrap = styled.div`
display: flex;
gap: 16px;
`;

export const ApplyFilterBtn = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;

  padding: 8px 0px;
  width: 116px;
  font-size: 16px;
  font-weight: 700;
  color: white;

  border-radius: 10px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  background-color: grey;

  &:hover,
  &:focus {
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;