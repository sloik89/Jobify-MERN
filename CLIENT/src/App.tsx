
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardLayout, HomeLayouts, Login, Register } from './Pages/'
const router = createBrowserRouter([
  {path:'/',element:<HomeLayouts/>},
  {path:'/about',element:<h1>about</h1>},
  {path:'/login',element:<Login/>},
  {path:'/register',element:<Register/>},
  {path:'/dashboard',element:<DashboardLayout/>}
])
function App() {
  

  return (
    
    <RouterProvider router={router}/>
  
         
   
  )
}

export default App
