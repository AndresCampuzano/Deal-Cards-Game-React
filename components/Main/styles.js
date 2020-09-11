import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    max-width: ${({ theme }) => theme.maxWidth};
    height: 90vh;
    color: ${({ theme }) => theme.blackColor};
`;

export const Button = styled.button`
    height: 40px;
    width: 120px;
    border-radius: 5px;
    background-color: #06a4f9;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    outline: none;
`;

export const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
