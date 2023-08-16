import styled from "styled-components";

export const UserWrap = styled.div`
display: flex;
align-items: center;
gap: 16px;
`;

export const UserName = styled.p`
  color: rgb(111, 245, 66);
`;

export const LogoutBtn = styled.button`
padding: 16px 32px;
font-weight: 700;
border-radius: 20px;
  border: 3px solid rgb(111, 245, 66);
  background-color: rgba(111, 245, 66, 0.4);

  &:hover,
  &:focus {
    background-color: rgba(111, 245, 66, 0.6);
  }
`;