
import { useDashboardConstext } from '../Pages/DashboardLayout'
import Wrapper from '../Wrappers/BigSidebar'
import { Logo, Navlinks } from '../components'
import { type ContextProps } from '../types/types'

const BigSidebar = () => {
const {showSidebar} = useDashboardConstext() as ContextProps
  return (
    <Wrapper>
      <div className={`sidebar-content ${!showSidebar ? 'move' : ''} `}>
        <Logo/>
        <Navlinks leaveOpen/>
      </div>

    </Wrapper>
  )
}

export default BigSidebar