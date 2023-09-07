import styled from "styled-components";
import { Link } from "react-router-dom";
import googleImg from "../../assets/images/google.png";

export const FormWrap = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 608px;
  padding: 16px 0px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 40px;

  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    );
`;

export const FormTitleStyled = styled.h1`
  font-size: 36px;
  line-height: 1.37;
  font-weight: 700;
  color: rgb(219, 167, 22);
  text-align: center;
  margin-bottom: 20px;
`;

export const LabelStyled = styled.label`
font-weight: 700;
margin-bottom: 5px;
`;

export const InpuStyled = styled.input`
outline: none;
  width: 458px;
  height: 48px;
  border: 2px solid rgb(219, 167, 22);
  border-radius: 40px;
  padding: 12px 16px;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemStyled = styled.li`
position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const SubmitBtnStyled = styled.button`
  width: 458px;
  height: 48px;
  border: 2px solid rgb(219, 167, 22);
  border-radius: 40px;
  background-color: rgb(219, 167, 22);
  padding: 0px 16px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 16px;

  font-size: 20px;
  line-height: 1.37;
  font-weight: 600;
  color: #ffffff;

  cursor: pointer;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, rgb(250, 196, 73), rgb(219, 167, 22));
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  }
`;

export const GoogleBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 458px;
  height: 48px
  padding: 0;
  border-radius: 40px;
  border: 2px solid white;
  background-color: white;
  
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;

  font-size: 20px;
  line-height: 1.37;
  font-weight: 600;

  &:hover {
    border: 2px solid white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  }
`;

export const GoogleIcon = styled.div`
  background-image: url("${googleImg}");
  background-repeat: no-repeat;
  background-size: contain;
  
  width: 36px;
  height: 36px;
`;

export const TextStyled = styled.p`
  font-size: 14px;
  line-height: 1.37;
  font-weight: 400;
  margin-left: auto;
  margin-right: auto;
`;

export const LinkStyled = styled(Link)`
  font-size: 14px;
  line-height: 1.37;
  font-weight: 600;
  color: rgb(219, 167, 22);
  margin-left: 8px;
`;

export const ErrorMsg = styled.p`
  position: absolute;
  top: 70px;
  color: orange;
`;
