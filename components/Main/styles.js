import styled from 'styled-components';

const Container = styled.main`
    margin: auto;
    max-width: ${({ theme }) => theme.maxWidth};
    color: ${({ theme }) => theme.blackColor};
`;

export default Container;
