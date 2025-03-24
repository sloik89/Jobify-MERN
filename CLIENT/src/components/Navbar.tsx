import { FaAlignLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Logo, LogoutContainer, ThemeToggle } from '../components'
import { useDashboardConstext } from '../Pages/DashboardLayout'
import { ContextProps } from '../types/types'

import Wrapper from '../Wrappers/Navbar'
const Navbar = () => {
  const {toggleSidebar} = useDashboardConstext() as ContextProps
  
  return (
    <Wrapper>
      <div className="nav-center">
          <button onClick={toggleSidebar}>
            <FaAlignLeft/>
          </button>   
        <div>
          <Logo/>
          <h4 className='logo-text'>dashboard</h4>
        </div>
        <div className='btn-container'>
          <ThemeToggle/>
          <LogoutContainer/>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar