import { FaTimes } from 'react-icons/fa'

import { useDashboardConstext } from '../Pages/DashboardLayout'
import Wrapper from '../Wrappers/SmallSidebar'
import { Logo, Navlinks } from '../components'
import { ContextProps } from '../types/types'

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
           <Navlinks/>
          </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar