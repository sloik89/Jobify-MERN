import styled from "styled-components";
const Wrapper = styled.div`
    nav {
        width:var(--fluid-width);
        max-width:var(--max-width);
        margin:0 auto;
        display:flex;
        align-items:center;
        height:var(--nav-height);
    }
    .page{
        margin-top:-3rem;
        display:grid;
        min-height:calc(100vh - var(--nav-height));
        align-items:center
    }
    h1{
        font-weight:700;
        span{
            color:var(--primary-500);
        }
        margin-bottom:1.5rem;

    }
    p{
        line-height:2;
        color:var(--text-secondary-color);
        margin-bottom:1.5rem;
    }
    .register-link{
        margin-right:1rem;
    }
    .main-img{
        display:none;
    }

    @media(min-width:992px){
        .page{
            grid-template-columns:1fr 400px;
            column-gap:3rem;
        }
        .main-img{
            display:block;
    
    }
`

export default Wrapper