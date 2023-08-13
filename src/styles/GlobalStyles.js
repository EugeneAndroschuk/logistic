import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body { 
    margin: 0 ;
    padding: 0;  
    
  }

  ul, li, ol {  
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }


  a {
    text-decoration: none;   
  } 

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
}
`;

export default GlobalStyles;