import styled from 'styled-components';

export const Red = styled.p`
    color: ${({ theme }) => theme.red};
`;

export const Black = styled.p`
    color: ${({ theme }) => theme.black};
`;

export const Card = styled.div`
    height: 190px;
    width: 130px;
    margin: 25px;
    border-radius: 5px;
    border: 3px solid #b9b9b9;
`;
