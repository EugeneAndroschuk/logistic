import styled from "styled-components";

export const UserNavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const LogoutBtn = styled.button`
width: 116px;
  padding: 8px 0px;
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