import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogIn } from "../../redux/auth/authThunks";
import {
  FormWrap,
  FormStyled,
  FormTitleStyled,
  InpuStyled,
  ListStyled,
  ItemStyled,
  SubmitBtnStyled,
  GoogleBtn,
  GoogleIcon,
  TextStyled,
  LinkStyled,
} from "./LoginForm.styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    const { email, password } = data;
    dispatch(userLogIn({ email, password }));
  };

  return (
    <FormWrap>
      <FormStyled onSubmit={handleSubmit((data) => onSubmitForm(data))}>
        <FormTitleStyled>Login</FormTitleStyled>
        <ListStyled>
          <ItemStyled>
            <label>Email</label>
            <InpuStyled
              {...register("email", { required: true })}
              placeholder={"Email"}
            />
          </ItemStyled>
          <ItemStyled>
            <label>Password</label>
            <InpuStyled
              {...register("password", { required: true })}
              placeholder={"Password"}
            />
          </ItemStyled>
          <ItemStyled>
            <label>Confirm password</label>
            <InpuStyled
              {...register("confirmPassword", { required: true })}
              placeholder={"Confirm password"}
            />
          </ItemStyled>
        </ListStyled>
        <SubmitBtnStyled type="submit">Login</SubmitBtnStyled>
        <GoogleBtn href="https://logistics-db.onrender.com/api/users/google">
          <GoogleIcon></GoogleIcon>
          Sign In with Google
        </GoogleBtn>
        <TextStyled>
          Already have an account ?
          <LinkStyled to="/auth/register">Register</LinkStyled>
        </TextStyled>
      </FormStyled>
    </FormWrap>
  );
};

export default LoginForm;
