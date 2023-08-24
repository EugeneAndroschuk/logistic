import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { userRegister } from "../../redux/auth/authThunks";
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
} from "./RegisterForm.styled";

const RegisterForm = () => {
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
        const { name, email, password, role } = data;
        console.log(data);
        dispatch(userRegister({ name, email, password, role }));
    }

  return (
    <FormWrap>
      <FormStyled onSubmit={handleSubmit((data) => onSubmitForm(data))}>
        <FormTitleStyled>Registration</FormTitleStyled>
        <ListStyled>
          <ItemStyled>
            <LabelStyled htmlFor="name">Name</LabelStyled>
            <InpuStyled
              {...register("name", { required: true })}
              placeholder={"Name"}
            />
          </ItemStyled>
          <ItemStyled>
            <LabelStyled htmlFor="email">Email</LabelStyled>
            <InpuStyled
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
          <ItemStyled>
            <label>Role</label>
            <select {...register("role", { required: true })}>
              <option value="accountant">accountant</option>
              <option value="manager">manager</option>
            </select>
          </ItemStyled>
        </ListStyled>
        <SubmitBtnStyled type="submit">Register</SubmitBtnStyled>
        <GoogleBtn href="https://logistics-db.onrender.com/api/users/google">
          <GoogleIcon></GoogleIcon>
          Sign In with Google
        </GoogleBtn>
        <TextStyled>
          Already have an account ?
          <LinkStyled to="/auth/login">Login</LinkStyled>
        </TextStyled>
      </FormStyled>
    </FormWrap>
  );
};

export default RegisterForm;
