import styled from "styled-components";

export const Nav = styled.nav`
    padding: 30px 0;
    display: flex;
    align-items: center;

    @media (max-width: 767px){
        justify-content: space-between;
        position: relative;
    }
`

type menuProps = {
    showMenu:boolean
}

export const ContainerMenu = styled.div<menuProps>`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;

    @media (max-width: 767px){
        display: ${props => props.showMenu ? 'flex' : 'none'};
        position: absolute;
        flex-direction: column;
        bottom:-350px;
        width: 100%;
        background-color: hsl(257, 27%, 26%);
        padding: 30px 0;
        height: 350px;
        border-radius: 10px;
    }
`

export const HorizontalLine = styled.div`
    display: none;
    background-color: gray;
    height: 1px;
    width: 80%;

    @media (max-width: 767px){
        display: block;
    }
`

export const Links = styled.div`
    padding: 0 40px;
    align-items: center;
    display: flex;
    gap: 20px;

    @media (max-width: 767px){
        flex-direction: column;
    }
`

export const HamburguerMenu = styled.a`
    display: none;

    @media (max-width: 767px){
        display: block;
    }
`