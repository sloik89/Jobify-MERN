import { useState } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useDashboardConstext } from '../Pages/DashboardLayout'
import Wrapper from '../Wrappers/ThemeToggle'
import { ContextProps } from '../types/types'
const ThemeToggle = () => {
    const {isDarkTheme,toggleDarkTheme} = useDashboardConstext() as ContextProps
    
  return (
    <Wrapper>
        <button onClick={toggleDarkTheme} className={`${isDarkTheme ? 'light' : 'dark'}`}>
            
        {isDarkTheme ? <BsFillMoonFill/> : <BsFillSunFill/>}
        </button>
    </Wrapper>
  )
}

export default ThemeToggle