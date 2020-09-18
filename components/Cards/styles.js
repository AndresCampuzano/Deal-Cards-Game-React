import styled from 'styled-components'

export const CardRed = styled.div`
  height: 190px;
  width: 130px;
  margin: 25px;
  border-radius: 5px;
  border: 3px solid red;
  background-color: white;
  color: #ff0000;
  box-shadow: 0px 10px 3px -6px rgba(214, 214, 214, 1);
  text-align: initial;
  p {
    margin-left: 4px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const ContentUp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: 22px;
  img {
    width: 22px;
  }
`

export const ContentDown = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(180deg);
  margin: 10px;
  font-size: 22px;
  img {
    width: 22px;
  }
`

export const CardBlack = styled.div`
  height: 190px;
  width: 130px;
  margin: 25px;
  border-radius: 5px;
  border: 3px solid black;
  background-color: white;
  color: #000000;
  box-shadow: 0px 10px 3px -6px rgba(214, 214, 214, 1);
  text-align: initial;
  p {
    margin-left: 4px;
  }
`
