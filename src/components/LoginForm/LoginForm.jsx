import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../redux/auth/authThunks";
import {
  FormWrap,
  FormStyled,
  FormTitleStyled,
  LabelStyled,
  InpuStyled,
  ListStyled,
  ItemStyled,
  SubmitBtnStyled,
  GoogleBtn,
  GoogleIcon,
  TextStyled,
  LinkStyled,
  ErrorMsg,
} from "./LoginForm.styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

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
            <LabelStyled htmlFor="email">Email</LabelStyled>
            <InpuStyled
              type="email"
              {...register("email", { required: true })}
              placeholder={"Email"}
            />
          </ItemStyled>
          <ItemStyled>
            <LabelStyled htmlFor="password">Password</LabelStyled>
            <InpuStyled
              type="password"
              {...register("password", {
                required: "You must specify a password",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters",
                },
              })}
              placeholder={"Password"}
            />
            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          </ItemStyled>
          <ItemStyled>
            <LabelStyled htmlFor="confirmPassword">
              Confirm password
            </LabelStyled>
            <InpuStyled
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
              placeholder={"Confirm password"}
            />
            {errors.confirmPassword && (
              <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>
            )}
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
