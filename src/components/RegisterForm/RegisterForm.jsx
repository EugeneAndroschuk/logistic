import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userRegister } from "../../redux/auth/authThunks";
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
} from "./RegisterForm.styled";

const RegisterForm = () => {
    const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();
    
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
            <label>Name</label>
            <InpuStyled
              {...register("name", { required: true })}
              placeholder={"Name"}
            />
          </ItemStyled>
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
