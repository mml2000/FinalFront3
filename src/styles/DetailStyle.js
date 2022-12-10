import styled from "styled-components";

export const TableStyled = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    width: 90%;
    display: table;
    border: 1px solid black;
    margin: auto;
`
export const TdStyled = styled.td`
    border: 1px solid black;
    text-align: left;
    padding: 8px;
    background-color: ${props => props.theme.bColor};
    color: ${props => props.theme.color};
`
export const ThStyled = styled.th`
    border: 1px solid black;
    text-align: left;
    padding: 8px;
    background-color: #007acc;
    color: white;
`