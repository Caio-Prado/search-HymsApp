import styled from "styled-components";

export const Container = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 1000px;
    height: 700px;
    background-color: #232222;
    border-radius: 50px;

    input {
        width: 200px;
        height: 50px;
        outline: none;
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
        font-size: 20px;
    }

    h1 {
        font-size: 50px;
        padding-top: 20px;
    }

    @media (max-width: 900px) {
        h1 {
        font-size: 30px;
        padding-top: 20px;
        }
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

