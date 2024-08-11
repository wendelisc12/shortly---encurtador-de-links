import styled from "styled-components"

export const StatitisContainer = styled.div`
    width: 300px;
    height: 300px;
    padding: 0 20px 20px 20px;
    background-color: white;
    z-index: 100;
    border-radius: 10px;
`

export const FloatingImage = styled.div`
    position: relative;
    height: 30px;
`

export const ImageBox = styled.div`
    background-color: hsl(255, 11%, 22%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -30px;
`
