import styled from "styled-components";

type prop = {
    align: 'left' | 'right'
}

export const Main = styled.main`
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    margin-top: 10px;
`

export const Container = styled.div<prop>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: ${(props) => props.align === 'left' ? 'start' : 'end'};

    button{
        margin-top: 20px;
    }
`