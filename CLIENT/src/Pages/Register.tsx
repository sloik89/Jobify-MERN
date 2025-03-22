import { Link } from "react-router-dom"
import { FormRow, Logo } from "../components"
import Wrapper from "../Wrappers/Register"

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>Register</h4>
        <FormRow name="name" defaultValue="john" type="text" labelText="name"/>
        <FormRow name="lastname" defaultValue="smith" type="text" labelText="last name"/>
        <FormRow name="location" defaultValue="earth" type="text" labelText="location"/>
        <FormRow name="email" defaultValue="example@gmail.com" type="email" labelText="email"/>
        <FormRow name="password" defaultValue="password" type="password" labelText="password"/>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Allready a member? <Link className="member-btn" to='/login'>Login</Link>
        </p>
      </form>
    </Wrapper>
    
  )
}

export default Register