import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 300px;
    height: 100px;
    margin: 0 auto;
    &>label{
        text-align: center;
        margin-top: 10px;
    }
`
export const PStyled = styled.p`
    text-align: center;
    margin: 50px 0;
`

export const InputButtonFormStyled = styled.input`
    margin: 20px 0;
`