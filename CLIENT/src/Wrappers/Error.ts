import styled from "styled-components";
const Wrapper = styled.main`
    height:100vh;
    display:grid;
    place-items:center;   
    .err-img{
        width:80%;
        max-width:700px;
    }
    div{
        display:flex;
        flex-direction:column;
        justify-items:center;
        align-items:center;
        gap:2rem;
    }
`

export default Wrapper