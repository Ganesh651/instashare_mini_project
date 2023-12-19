import styled from 'styled-components'


export const NotfoundContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 20px;
}
`

export const NotfoundImage = styled.img`
  width: 269px;
  height: 297px;
  padding: 0px 0.003px 0px 0.004px;
  flex-shrink: 0;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    height: 220px;
    width: 200px;
    margin-top: 30px;
}
`

export const Heading = styled.h1`
  color: #262626;
  text-align: center;
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 20px;
}
`

export const Paragraph = styled.p`
  color: #989898;
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto';
  line-height: 32px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
}
`

export const Button = styled.button`
   border: none;
  outline: none;
  width: 100px;
  height: 35px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 8px;
  background: #4094ef;
  cursor: pointer;
`