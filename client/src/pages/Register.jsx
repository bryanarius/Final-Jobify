import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='Bryan' />
        <FormRow
          type='text'
          name='lastName'
          labelText='Last Name'
          defaultValue='Arius'
        />
        <FormRow type='text' name='location' defaultValue='Earth' />
        <FormRow type='email' name='email' defaultValue='Bryan@gmail.com' />
        <FormRow type='password' name='password' defaultValue='secret' />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
