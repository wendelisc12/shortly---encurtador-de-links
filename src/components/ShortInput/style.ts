import styled from "styled-components";

type prop ={
    erro:string
}

export const Container = styled.div`
    position: relative;
    height: 60px;

    @media (max-width: 767px){
        margin-bottom: 40px;
    }
`

export const FloatContainer = styled.div`
    height: 120px;
    width: 100%;
    background: url('./bg-shorten-desktop.svg') hsl(257, 27%, 26%);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    gap: 15px;
    position: absolute;
    top: -60px;
    
    @media (max-width: 767px){
        top: -80px;
        padding: 0 20px;
        height: 160px;
        gap: 20px;
        flex-direction: column;
        background: url('./bg-shorten-mobile.svg')  hsl(257, 27%, 26%) right no-repeat;
    }
`

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
`

export const Input = styled.input<prop>`
    width: 100%;
    padding: 0 20px;
    height: 45px;
    border: ${props => props.erro === 'vazio' || props.erro === 'invalido' ? '3px solid hsl(0, 87%, 67%)' : 'none'};
    border-radius: 10px;
    font-size: 16px;
    height: 50px;
    
    &::placeholder{
        color: ${props => props.erro === 'vazio' || props.erro === 'invalido' ? 'hsl(0, 87%, 67%)' : 'hsl(257, 7%, 63%)'};
    }
`

export const ErrorText = styled.p`
    color: hsl(0, 87%, 67%);
    display: block;
    position: absolute;
`