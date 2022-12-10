import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0 0 0 17vw;
    padding: 10px;
    align-items: center;
`
export const Li = styled.li`
    margin: 10px;
    cursor: pointer;
    & > a{
        color: ${props => props.color};
        text-decoration: none;
        font-size: 18px;
        :hover{
            color: rgb(136, 136, 136);
        }
    }

`

export const NavStyled = styled.nav `
    background-color: ${props => props.bColor};
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
    height: 75px;
    align-items: center;
`

export const ButtonStyled = styled.button`
    margin-left: 50px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    & > img{
        width: 22px;
    }
`