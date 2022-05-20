import styled from "styled-components";

export const Container = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 1000px;
    height: 100%;
    background-color: #262525;
    border-radius: 30px;
    color: #fff;

    @media (max-width: 900px) {
        width: 100%;
    }

    input {
        width: 200px;
        height: 60px;
        outline: none;
        color: #fff;
        background: transparent;
        border: 1px solid #fff;
        font-size: 30px;
        text-align: center;
    }

    h1 {
        font-size: 50px;
        padding-top: 20px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;