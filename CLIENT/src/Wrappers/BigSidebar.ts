import styled from "styled-components";
const Wrapper = styled.div`
    display:none;
    background-color:var(--grey-200);
    height:100vh;
    .sidebar-content{
        margin-top:2rem;
       width:0;
       overflow:hidden;
        transform:translateX(-300%);
        transition:var(--transition);
    }
    .move{
        transform:translateX(0);
        width:200px;
        display:flex;
        flex-direction:column;
        align-items:center;
        .logo{
        width:150px;
        .nav-links{
            opacity:0;
        }
    }
    }
    .nav-links{
       
        margin-top:2rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:2rem;
        a{
            display:flex;
            align-items:center;
            gap:1rem;
            text-transform:capitalize;
            font-size:1.2rem;
            color:var(--primary-900)
            transition:var(--transition);
        }
        a:hover{
            color:var(--primary-400)
        }
        a.active{
            color:var(--primary-600)
        }

    }
@media (min-width:992px){
    display:block;


}
`
export default Wrapper