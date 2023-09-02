import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

margin-bottom: 20px;
`;

export const NavLinkWrap = styled.div`
display: flex;
gap: 32px;
justify-content: center;
align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  font-size: 20px;
  font-weight: 700;
  color: white;
  padding-top: 25px;
  padding-bottom: 25px;

  &::after {
    content: "";
    position: absolute;
    top: 50px;
    left: 0;

    width: 100%;
    height: 8px;
    border-radius: 8px;
    background-color: rgb(219, 167, 22);

    transform: scale(0);

    transition: 0.3s ease transform;
  }

  &.active {
    color: rgb(219, 167, 22);

    &::after {
      transform: scale(1);
    }
  }
`;