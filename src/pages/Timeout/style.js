import styled from "styled-components";
export const AdjustHome = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width:850px;
    height:400px;
    margin:auto;
    border: 1px solid #D1DCE3;
    border-radius: 4px;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);

`
export const Links = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    margin:auto;
    margin-top:50px;
    width:850px;
    height:80px;
    border: 1px solid #D1DCE3;
    border-radius: 4px;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
    a{  
        display:flex;
        justify-content: center;
        align-items: center;
        text-decoration:none;
        height:80px;
        width:34%;
        font-family: 'SourceSansPro';
        font-size: 18px;
        color: #656565;

    }
    a:hover{
        background-color:#d8e7fa;
        a:hover{
        background-color:#d8e7fa;
        animation: focus-in-contract 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        
    }
    @keyframes focus-in-contract {
        0% {
            letter-spacing: 1em;
            -webkit-filter: blur(12px);
                    filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
        }
    }
    }

`