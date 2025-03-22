import { ErrorResponse, isRouteErrorResponse, Link, useRouteError } from "react-router-dom"
import img from '../assets/images/not-found.svg'

import Wrapper from "../Wrappers/Error"
const Error = () => {
  const error = useRouteError() as (ErrorResponse | Error)
  let err :string
  if(isRouteErrorResponse(error) ) {
    err = error.statusText 
    return (
    <Wrapper>
      <div>
        <img src={img} alt="" />
        <h3>Ohh! page not found</h3>
        <p>we cant't seem to find the page you are looking for</p>
        <Link to='/dashboard'>
        back home
        </Link>
      </div>
    </Wrapper>
    )
  } 
  err = error.message
  return (
    <Wrapper>

   
    <div>
      <img className="err-img" src={img} alt="" />
        <Link to='/' className="btn">
        back home
        </Link>
        <h2>{err}</h2>
    </div>
    </Wrapper>
  )
}

export default Error