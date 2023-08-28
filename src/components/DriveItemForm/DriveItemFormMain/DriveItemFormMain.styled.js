import styled from "styled-components";

export const DriveFormWrap = styled.div`
  position: relative;

  margin-left: auto;
  margin-right: auto;

  width: 850px;
  padding: 16px;
  border: 1px solid white;
`;

export const DriveFormName = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: white;

  text-align: center;

  margin-bottom: 20px;
`;

export const StepWrap = styled.div`
  width: 750px;
  margin-bottom: 30px;

  margin-left: auto;
  margin-right: auto;
`;

export const StepList = styled.ul`
display: flex;
justify-content: center;
gap: 50px;

`;

export const StepItem = styled.li`
  position: relative;
  width: 300px;

  font-weight: 700;
  color: ${(prop) =>
    prop.isActive ? "rgb(219, 167, 22)" : "white"};
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    top: 25px;
    left: 0;

    width: 100%;
    height: 8px;
    border-radius: 8px;
    background-color: ${(prop) =>
      prop.isActive ? "rgb(219, 167, 22)" : "rgba(239, 239, 239, 0.3)"};
  }
`;

export const StepName = styled.p`
`;

export const EditBtnWrap = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const EditBtn = styled.button`
  background-color: inherit;
  border: none;
`;