import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useDashboardConstext } from '../Pages/DashboardLayout'
import Wrapper from '../Wrappers/SmallSidebar'
import { Logo } from '../components'
import { ContextProps } from '../types/types'
import links from '../utilis/links'
const SmallSidebar = () => {
  const {toggleSidebar} = useDashboardConstext() as ContextProps
  
  return (
    <Wrapper>
      <div className="sidebar show-sidebar">
          <div className="content">
            <button type='button' onClick={toggleSidebar} className='close-btn'>
              <FaTimes/>
            </button>
            <header>
              <Logo/>
            </header>
            <div className="nav-links">
                {links.map(link=> {
                  const {path,icon,text} = link
                  return (
                    <NavLink key={text} to={path} onClick={toggleSidebar} className={({isActive})=>isActive ? 'active' : ''} end >
                      <span>{icon}</span>
                        {text}
                    </NavLink>
                  )
                })}
            </div>
          </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar