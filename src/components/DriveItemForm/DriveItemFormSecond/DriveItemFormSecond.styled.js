import styled from "styled-components";

export const FormWrap = styled.div`
  position: relative;

  margin-left: auto;
  margin-right: auto;

  width: 750px;
  //   padding: 16px;
  border: 1px solid white;
`;

export const FormItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;

  margin-bottom: 8px;
`;

export const Label = styled.label`
  display: inline-block;
  width: 150px;
  font-size: 16px;
  font-weight: 700;
  color: white;

  padding: 8px;

  border-bottom: 3px solid rgba(239, 239, 239, 0.3);
`;

export const Input = styled.input`
  outline: none;
  width: 600px;
  padding: 8px;
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgdcolor};

  border-radius: 10px;
`;

export const ClientListBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 16px;

  background-color: transparent;
  border: none;

  :hover,
  :focus {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 16px;

  justify-content: center;
`;

export const SubmitFormBtn = styled.button`
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 0px;
  margin-top: 20px;

  font-size: 16px;
  font-weight: 700;
  color: white;

  border-radius: 10px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.3);

  &:hover,
  &:focus {
    font-weight: 700;
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const DeleteBtn = styled.button`
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 0px;
  margin-top: 20px;

  font-size: 16px;
  font-weight: 700;
  color: white;

  border-radius: 10px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.3);

  &:hover,
  &:focus {
    font-weight: 700;
    color: black;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
