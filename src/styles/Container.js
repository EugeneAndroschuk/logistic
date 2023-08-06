import { styled } from "styled-components";

const Container = styled.div`
width: 480px;
padding-left: 15px;
padding-right: 15px;
margin-left: auto;
margin-right: auto;

@media (min-width: 768px) {
    width: 768px;
}

@media (min-width: 1280px) {
    width: 1280px;
}
`;

export default Container;