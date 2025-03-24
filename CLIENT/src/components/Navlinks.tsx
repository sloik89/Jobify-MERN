import { NavLink } from 'react-router-dom'
import { useDashboardConstext } from '../Pages/DashboardLayout'
import { ContextProps } from '../types/types'
import links from '../utilis/links'

const Navlinks = ({leaveOpen} :{leaveOpen?:boolean}) => {
    const {toggleSidebar} = useDashboardConstext() as ContextProps
  return (
    <div className="nav-links">
    {links.map(link=> {
      const {path,icon,text} = link
      return (
        <NavLink key={text} to={path} onClick={  leaveOpen ? undefined : toggleSidebar} className={({isActive})=>isActive ? 'active' : ''} end >
          <span>{icon}</span>
            {text}
        </NavLink>
      )
    })}
</div>
  )
}

export default Navlinks