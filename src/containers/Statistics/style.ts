import styled from "styled-components";

export const SectionStatistics = styled.section`
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const HeaderStatistics = styled.header`
    width: 450px;
    margin-bottom: 60px;
    text-align: center;
`
export const MainStatistics = styled.main`
    display: flex;
    gap: 30px;
    position: relative;

    & div:nth-of-type(2){
        margin-top: 40px;
    }

    & div:nth-of-type(3){
        margin-top: 80px;
    }

    &::after{
        content: '';
        width: 80%;
        height: 8px;
        background-color: hsl(180, 66%, 49%);
        position: absolute;
        align-self: center;
    }
`