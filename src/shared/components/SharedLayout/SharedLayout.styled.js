import styled from "styled-components";
import img from "../../../assets/images/auth-bgd2.jpg";

export const SharedLayoutWrap = styled.div`
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("${img}");
  background-repeat: no-repeat;
  background-size: cover;
`;
