import styled from "styled-components";
export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:608px;
    height:400px;
    margin:auto;
   
    h2{
        font-family: 'SourceSansPro';
        font-size: 24px;
        color: #656565;
    }
    h3{
        font-family: 'SourceSansPro';
        font-size: 14px;
        color: #656565;
    }
    span{
        height: 14px;
    
        font-family: 'SourceSansPro';
        font-size: 11px;
        line-height: 13px;

        color: red;
    }
    label{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`
export const Antecipacao = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:370px;
    height:400px;
    input{
        width:251px;
        height:37px;
        background: #FFFFFF;
        border: 1px solid #DDE6E9;
        border-radius: 4px;
        cursor:pointer;
    }  
    input:hover{
        box-shadow:0px 0px 4px 0px rgba(0,0,0,0.75);
    }
    p{
        font-family: 'SourceSansPro';
        font-size: 14px;
        color: #656565;
    }
`