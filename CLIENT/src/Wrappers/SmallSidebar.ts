import styled from "styled-components";
const Wrapper = styled.div`
    @media (min-width:992px){
        display:none;

    }
    position:fixed;
    width:100%;
    height:100vh;
    background-color:rgba(0,0,0,0.2);
   .sidebar{
    display:grid;
    place-items:center;
    height:100vh;
   
   }
   .close-btn{
    font-size:2rem;
    border:none;
    background-color:transparent;
    color:var(--red-dark);
    position:absolute;
    left:2rem;
    top:2rem;
   }
    .content{
        
        background-color:var(--grey-100);
        width:90%;
        height:90vh;
        border-radius:1rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        position:relative;
    }
    header{
        margin-top:4rem;
    }
    .nav-links{
        margin-top:2rem;
        display:flex;
        flex-direction:column;
        gap:1rem;
        a{
            color:var(--green-dark);
            text-transform:capitalize;
            display:flex;
            align-items:center;
            gap:1rem;
        }
        a:hover{
            transition:var(--transition);
            color:var(--primary-500);
        }
        a.active{
            color:var(--primary-200);
        }
        span{
            font-size:1.5rem;

        }
    }
`
export default Wrapper