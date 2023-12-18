import styled from 'styled-components'


export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
  .login-container {
    justify-content: center;
    height: 100vh;
  }
}
`

export const LogoContainer = styled.div`
 text-align: center;
  margin-bottom: 20px;
`
export const LoginImage = styled.img`
  height: 300px;
  width: 400px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LoginFrom = styled.form`
  padding: 30px;
  width: 350px;
  height: 350px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fefeff;
  box-shadow: 0px 8px 40px 0px#bfbfbf;
`
export const InputContainer = styled.div`
 margin-bottom: 20px;
 width: 100%;
`
export const Label = styled.label`
  color: #262626;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
`
export const Input = styled.input`
  width: 95%;
  height: 30px;
  flex-shrink: 0;
  border-radius: 2px;
  background-color: #eee;
  outline: none;
  border: 1px solid #eee;
  padding: 10px;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 35px;
  flex-shrink: 0;
  border: none;
  outline: none;
  background-color: #4094ef;
  color: #ffffff;
  font-weight: 600;
  font-family: 'Roboto';
  border-radius: 3px;
`
export const ErrorMessage = styled.p`
  color: var(--light-red-500, #ef4444);
  font-size: 13px;
  font-family: Roboto;
`