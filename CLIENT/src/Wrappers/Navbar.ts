import styled from "styled-components";
const Wrapper = styled.nav`
padding:1rem 2rem;
background-color:var(--grey-100);
.nav-center{
    display:flex;
    justify-content:space-between;
    align-items:center
}
button {
    font-size:2rem;
    border:none;
    color:var(--primary-500);
    cursor:pointer;
}
.btn-container{
    display:flex;
    align-items:center;
}
.logo{
    @media (min-width:992px){
    display:none
}
}



`
export default Wrapper