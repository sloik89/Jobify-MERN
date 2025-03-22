
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import { Logo } from '../components/'
import Wrapper from "../Wrappers/Landing"
const Landing = () => {

  return (
    <Wrapper>
      <nav>
          <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit odio consequuntur perferendis illo. Reiciendis tempore perferendis ut repellat esse.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit odio consequuntur perferendis illo. Reiciendis tempore perferendis ut repellat esse.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/register' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt=""  className='img main-img'/>
      </div>
    </Wrapper>
    
  )
}

export default Landing