import styled from "styled-components";


export const CardInfoContainer = styled.div `
    background-color: ${props => props.colors.bColor};
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 200px;
    padding: 0.5rem 0.5rem 0 0.5rem;
    border: 0.5px solid rgb(136, 136, 136);
    :hover{
    border: 0.5px solid ${props => props.colors.remove? props.colors.remove : "#007acc"};
    }
    & > p {
        cursor: pointer;
        margin: 10px 0 5px;
        font-weight: bolder;
    }
`

export const StyledButton = styled.button`
    background-color: ${props => props.bColor};
    padding: 10px;
    border: none;
    width: 100%;
    cursor: pointer;
    margin: 10px 0;
    color: white;
    transition: 0.1s linear;
    :hover{
        transform:scale(1.05);
    }
`

export const StyledImg = styled.img`
    width: 208px;
    cursor: pointer;
`

export const DivAlert = styled.div`
    position: fixed;
    top: 0;
    background: #007acc;
    left: 40%;
    height: 30px;
    padding: 0 5px;
    color: white;
    & >p{
        margin: 0;
    }
`