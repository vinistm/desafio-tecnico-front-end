import styled from "styled-components";
export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:608px;
    height:400px;
    margin:auto;
    border: 1px solid #D1DCE3;
    border-radius: 4px;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
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
export const Receber = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color:#D1DCE3;
    width:231px;
    height:400px;
    color:#3D75BB;
    padding-left: 20px;
    p{
        font-family: Source Sans Pro;
        font-size: 16px;
        font-style: italic;
        font-weight: 700;
        line-height: 46px;
        letter-spacing: 0px;
        text-align: left;

        font-family: Source Sans Pro;
        font-size: 16px;
        font-style: italic;
        font-weight: 400;
        line-height: 46px;
        letter-spacing: 0px;
        text-align: left;
    }
    h2{
        
        font-family: Source Sans Pro;
        font-size: 16px;
        font-style: italic;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;

        border: 2px solid #5D9CEC;
        border-bottom-width: 2px;
        border-top-width: 0;
        border-right-width: 0;
        border-left-width: 0;

    }

    

`