import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  max-width: ${({ theme }) => theme.maxWidth};
  height: 80vh;
  color: ${({ theme }) => theme.blackColor};
`

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
  box-shadow: 0px 10px 3px -6px rgba(214, 214, 214, 1);
  :disabled {
    background-color: #cfcfcf;
  }
`

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
