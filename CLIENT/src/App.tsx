
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddJobs, Admin, AllJobs, DashboardLayout, Error, HomeLayouts, Landing, Login, Profile, Register, Stats } from './Pages/'

const getTheme = ():boolean => {
  const theme = localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme',theme)
  return theme
  
}
const isDarkThemeEnabled = getTheme()

const router = createBrowserRouter([
  {
  path:'/',
  element:<HomeLayouts/>,
  errorElement:<Error/>,
  children:[
    {
      index:true,
      element:<Landing/>
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'register',
      element:<Register/>
    },
    {
      path:'/dashboard',
      element:<DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled}/>,
      children:[
        {
          index:true,
          element:<AddJobs/>
          
        },
        {
          path:'stats',
          element:<Stats/>
        },
        {
          path:'all-jobs',
          element:<AllJobs/>
        },
        {
          path:'profile',
          element:<Profile/>
        },
        {
          path:'admin',
          element:<Admin/>
        }
      ]
    }
  ]
  },
  {path:'/about',element:<h1>about</h1>},
  
  {path:'/register',element:<Register/>},

])
function App() {
  

  return (
    
    <RouterProvider router={router}/>
  
         
   
  )
}

export default App
