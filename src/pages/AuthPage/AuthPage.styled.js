import styled from "styled-components";
import img from "../../assets/images/auth-bgd1.jpg";

export const AuthPageWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.8),
      rgba(47, 48, 58, 0.8)
    ),
    url("${img}");
  background-repeat: no-repeat;
  background-size: cover;
`;