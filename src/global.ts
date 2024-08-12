import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        overflow-x: hidden;
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;

    @media (max-width: 767px){
        width: 90%;
    }
`

export const ContainerGray = styled.div`
    margin-top: 100px;
    padding-bottom: 100px;
    background-color: #EFF1F5;

    @media (max-width: 767px){
        margin-top: 140px;
    }
`

export const ContainerFooter = styled.footer`
    background-color: hsl(260, 8%, 14%);
`