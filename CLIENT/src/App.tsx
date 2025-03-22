
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardLayout, Error, HomeLayouts, Landing, Login, Register } from './Pages/'
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
      element:<DashboardLayout/>
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
