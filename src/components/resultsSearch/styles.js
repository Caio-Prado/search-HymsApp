import styled from "styled-components";

export const Container = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 1000px;
    height: 100%;
    background-color: #bbbbbb;
    border-radius: 30px;
    color: #000;

    @media (max-width: 900px) {
        width: 100%;
    }

    input {
        width: 200px;
        height: 60px;
        outline: none;
        color: #0056B3;
        background: #efefef;
        border: 1px solid #033d60;
        font-size: 30px;
        text-align: center;
    }

    h1 {
        font-size: 50px;
        text-transform: uppercase;
        padding-top: 20px;
        color: #000;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;