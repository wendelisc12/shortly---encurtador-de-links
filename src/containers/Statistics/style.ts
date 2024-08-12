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


    @media (max-width: 767px){
        width: 300px;
    }
`
export const MainStatistics = styled.main`
    display: flex;
    gap: 30px;
    position: relative;

    & div:nth-of-type(2){
        margin-top: 40px;
        @media (max-width: 767px){
            margin: 0;
        }
    }

    & div:nth-of-type(3){
        margin-top: 80px;

        @media (max-width: 767px){
            margin: 0;
        }
    }

    &::after{
        content: '';
        width: 80%;
        height: 8px;
        background-color: hsl(180, 66%, 49%);
        position: absolute;
        align-self: center;

        @media (max-width: 767px){
            width: 8px;
            height: 80%;
        }
    }

    @media (max-width: 767px){
        flex-direction: column;
        gap: 100px;
        margin-top: 30px;
    }
`