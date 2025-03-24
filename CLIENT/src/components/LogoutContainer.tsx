
import { useState } from 'react'
import { FaCaretDown, FaUserCircle } from 'react-icons/fa'
import { useDashboardConstext } from '../Pages/DashboardLayout'
import { ContextProps } from '../types/types'
import Wrapper from '../Wrappers/LogoutContainer'
const LogoutContainer = () => {
    const [showLogout,setShowLogout] = useState(false)
    const {user,logoutUser} = useDashboardConstext() as ContextProps
    console.log(user)
  return (
    <Wrapper>
        <button type='button' className='' onClick={()=>setShowLogout(!showLogout)}>
            <FaUserCircle/>
            {user.name}
            <FaCaretDown/>
        </button>
        <div className={`${showLogout ? 'dropdown show-dropdown' : 'dropdown'}`}>
            <button>logout</button>
        </div>
    </Wrapper>
  )
}

export default LogoutContainer