import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../redux/auth/authThunks";

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
    <div>
      <form onSubmit={handleSubmit((data) => onSubmitForm(data))}>
        <h1>Login</h1>
        <ul>
          <li>
            <label>Email</label>
            <input
              {...register("email", { required: true })}
              placeholder={"Email"}
            />
          </li>
          <li>
            <label>Password</label>
            <input
              {...register("password", { required: true })}
              placeholder={"Password"}
            />
          </li>
          <li>
            <label>Confirm password</label>
            <input
              {...register("confirmPassword", { required: true })}
              placeholder={"Confirm password"}
            />
          </li>
        </ul>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
