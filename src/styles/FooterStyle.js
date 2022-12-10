import styled from "styled-components";



export const ImgIconStyled = styled.img `
    filter: invert(${props => props.colorImg});
    width: 25px;
    margin: 0 1vw;
`


export const ImageContainer = styled.div `
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    & > div{
        margin-left: 15vw;
    }
`

export const DivRed = styled.div`
    display: flex;
    justify-content: center;
    background-color: red;
    color: white;
    height: 25px;
    width: 100vw;
    align-items: center;
    font-size: 0.8em;
    margin-top: 35px;
`

export const ImgLogo = styled.img `
    filter: invert(${props => props.colorImg});
    width: 200px;
    margin: 0;
`

export const DivStyled = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    position: relative;
    bottom: 0;
    width: 90%;
    height: 40px;
    & > p {
    margin: 0 0 0 10vw;
    padding-top: 0.5rem;
    width: 200px;
    }
`