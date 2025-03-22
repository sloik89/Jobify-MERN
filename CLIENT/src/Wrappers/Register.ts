import styled from "styled-components";
const Wrapper = styled.div`

.form{
    border-top:3px solid var(--green-dark);
    display:grid;
    gap:2rem;

}
.logo{
    justify-self:center;
}
h4{
    justify-self:center;
    font-weight:bold;
    letter-spacing:2px;
    font-size:1.5rem;
}
label{
    font-weight:bold;
    font-size:1.1rem;
}
input{
    width:100%;
    padding:0.5rem 1rem;
    background-color:var(--grey-100);
    border:2px solid var(--grey-300);
    border-radius:8px;
}
`
export default Wrapper