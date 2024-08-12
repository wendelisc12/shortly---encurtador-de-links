import styled from "styled-components";

type prop = {
    align: 'left' | 'right'
}

export const Main = styled.main`
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    margin-top: 10px;

    @media (max-width: 767px){
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
`

export const Container = styled.div<prop>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: ${(props) => props.align === 'left' ? 'start' : 'end'};

    button{
        margin-top: 20px;
    }

    @media (max-width: 767px){
        align-items: center;
        text-align: center;

        p{
            margin-top: 10px;
        }
    }
`

type propsImg = {
    widthImg:number,
    responsiveWidth:number
}

export const Illustration = styled.img<propsImg>`
    width: ${props => props.widthImg + 'px'};

    @media (max-width: 767px){
        width: ${props => props.responsiveWidth + 'px'};
        margin-bottom: 40px;
    }

`