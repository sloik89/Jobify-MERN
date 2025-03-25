import { createContext, useContext, useState } from "react"
import { Outlet } from "react-router-dom"
import Wrapper from '../Wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import { ContextProps } from '../types/types'
const DashboardContext = createContext<ContextProps | undefined>(undefined)

const DashboardLayout = ({isDarkThemeEnabled} : {isDarkThemeEnabled:boolean}) => {

  const user = {name:'john'};
  const [showSidebar,setShowSidebar] = useState(false)
  const [isDarkTheme,setIsDarkTheme] = useState(isDarkThemeEnabled)
  
  const toggleDarkTheme = () => {
    console.log('toggle dark theme')
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme',newDarkTheme)
    localStorage.setItem('darkTheme',String(newDarkTheme))
  }
  const toggleSidebar = () => {
    console.log('toogle sidebar')
    setShowSidebar(!showSidebar)
  }
  const logoutUser = async () => {
    console.log('logout user')
  }
  return (
    <DashboardContext.Provider value={{ isDarkTheme,showSidebar,user,logoutUser,toggleSidebar,toggleDarkTheme}}>
    <Wrapper >
      <main className="dashboard">
        {showSidebar && <SmallSidebar/>}
        <BigSidebar/>
       
        <div>
          <Navbar/>
          <div className="dashboard-page">
            <Outlet/>
          </div>
        </div>
      </main>
     
    </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardConstext = () => useContext(DashboardContext)
export default DashboardLayout