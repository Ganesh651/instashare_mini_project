import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate, Navigate } from 'react-router-dom'
import { loginUrl } from '../Urls'
import {
  LoginContainer,
  LoginImage,
  LoginFrom,
  LogoContainer,
  InputContainer,
  Input,
  Label,
  ErrorMessage,
  LoginButton
} from './login'
import './index.css'


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate()

  const renderSuccessView = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 10 })
    navigate("/")
  }

  const renderFailureView = error => {
    setErrorMessage(error)
  }

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangePassword = (e) => {
    setShowError(true)
    setPassword(e.target.value)
  }

  const onFormSubmit = async (e) => {
    e.preventDefault()
    const userDetails = { username, password }
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails)
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      renderSuccessView(data.jwt_token)
    } else {
      renderFailureView(data.error_msg)
    }
  }

  const token = Cookies.get("jwt_token")

  if (token !== undefined) {
    return <Navigate to="/" />
  }

  return (
    <LoginContainer>
      <div>
        <LoginImage
          src="https://res.cloudinary.com/dky69roxl/image/upload/v1687428143/Layer_2_yigitt.png"
          alt="website login"
        />
      </div>
      <LoginFrom onSubmit={onFormSubmit}>
        <LogoContainer>
          <LoginImage
            style={{ width: "82px", height: "42px" }}
            src="https://res.cloudinary.com/dky69roxl/image/upload/v1687411063/Standard_Collection_8_yc8kdx.svg"
            alt="website logo"
          />
          {/* <p>Insta Share</p> */}
        </LogoContainer>
        <InputContainer>
          <Label htmlFor="username">
            USERNAME
          </Label>
          <br />
          <Input
            onChange={onChangeUsername}
            value={username}
            type="text"
            id="username"
            placeholder="Username"
          />
        </InputContainer>
        <InputContainer>
          <Label className="label-text" htmlFor="password">
            PASSWORD
          </Label>
          <br />
          <Input
            onChange={onChangePassword}
            value={password}
            id="password"
            type="password"
            placeholder="Password"
          />
        </InputContainer>
        {showError && <ErrorMessage className="error-message">{errorMessage}</ErrorMessage>}
        <LoginButton type="submit" className="login-btn">
          Login
        </LoginButton>
      </LoginFrom>
    </LoginContainer>
  )

}

export default Login
