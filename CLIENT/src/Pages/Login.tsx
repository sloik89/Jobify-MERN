import { Link } from "react-router-dom"
import { FormRow, Logo } from "../components"
import Wrapper from "../Wrappers/Register"
const Login = () => {
  return (
    <Wrapper>
    <form className="form">
      <Logo/>
      <h4>Login</h4>
      <FormRow name="email" defaultValue="example@gmail.com" type="email" labelText="email"/>
      <FormRow name="password" defaultValue="password" type="password" labelText="password"/>

      <button type="submit" className="btn btn-block">
        submit
      </button>
      <p>
        Want to join? <Link className="member-btn" to='/register'>Register</Link>
      </p>
    </form>
  </Wrapper>
  )
}

export default Login