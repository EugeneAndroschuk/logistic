import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/auth/authThunks";

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
    <div>
          <form onSubmit={handleSubmit((data) => onSubmitForm(data))}>
              <h1>Register</h1>
        <ul>
          <li>
            <label>Name</label>
            <input
              {...register("name", { required: true })}
              placeholder={"Name"}
            />
          </li>
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
          <li>
            <label>Role</label>
            <select {...register("role", { required: true })}>
              <option value="accountant">accountant</option>
              <option value="manager">manager</option>
            </select>
          </li>
        </ul>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
