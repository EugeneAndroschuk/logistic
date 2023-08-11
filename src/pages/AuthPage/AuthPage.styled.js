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

// export const GoogleBtn = styled.a`
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   width: 190px;
//   padding: 0;
//   border-radius: 5px;
//   border: thin solid #888;
//   box-shadow: 1px 1px 1px grey;

//   &:hover {
//     border: 2px solid grey;
//   }
// `;

// export const GoogleIcon = styled.div`
//   background: url("https://developers.google.com/identity/sign-in/g-normal.png") transparent 5px 50% no-repeat;
//   display: inline-block;
// //   vertical-align: middle;
//   width: 42px;
//   height: 42px;
// `;