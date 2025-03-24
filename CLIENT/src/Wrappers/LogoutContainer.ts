import styled from "styled-components";
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
button {
    background: var(--primary-500);
    color: var(--white);
    transition: var(--transition);
    text-transform: capitalize;
    display: inline-block;
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-1);
    border: transparent;
    border-radius: var(--border-radius);
    letter-spacing: var(--letter-spacing);
    font-size:1.3rem;
}
.dropdown{
    display:none
}
.show-dropdown{
    position:absolute;
    top:50px;
    left:0;
    display:block;
}
`
export default Wrapper