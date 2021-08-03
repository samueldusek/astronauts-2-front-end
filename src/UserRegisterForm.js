import React, { useState } from "react";
import useInputState from "./hooks/useInputState";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";
import img from "./img/logo2.svg";
const { registerValidation } = require("./validations/users");

function UserRegisterForm() {
  const [validationErrorMsg, setValidationErrorMsg] = useState("");
  const [
    username,
    handleUsernameChange,
    resetUsername,
    isUsernameError,
    setIsUsernameError,
  ] = useInputState("", false);
  const [email, handleEmailChange, resetEmail, isEmailError, setIsEmailError] =
    useInputState("", false);
  const [
    password,
    handlePasswordChange,
    resetPassword,
    isPasswordError,
    setIsPasswordError,
  ] = useInputState("", false);
  const [
    passwordConfirmation,
    handlePasswordConfirmationChange,
    resetPasswordConfirmation,
    isPasswordConfirtmationError,
    setIsPasswordConfirmationError,
  ] = useInputState("", false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    console.log(email);

    const { error } = registerValidation({
      username: username,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    });

    if (error) {
      const { key } = error.details[0].context;
      if (key === "username") {
        setIsUsernameError(true);
      } else if (key === "email") {
        setIsEmailError(true);
      } else if (key === "password") {
        setIsPasswordError(true);
      } else {
        setIsPasswordConfirmationError(true);
      }
      setValidationErrorMsg(error.details[0].message);
    } else {
      axios({
        method: "post",
        baseURL: "http://localhost:3000/api/",
        url: "/users/register",
        data: {
          username: username,
          email: email,
          password: password,
          passwordConfirmation: passwordConfirmation,
        },
      })
        .then(function (response) {
          console.log(response.data.user);
          setShouldRedirect(true);
        })
        .catch(function (error) {
          console.log(error);
        });

      resetUsername();
      resetEmail();
      resetPassword();
      resetPasswordConfirmation();
    }
  };
  return (
    <Paper
      elevation={3}
      style={{
        maxWidth: "450px",
        margin: "auto",
        marginTop: "2rem",
        padding: "1rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography component="h1" variant="h4" align="center">
          Register and start recording your astronauts
        </Typography>
        <img
          src={img}
          alt="Astronaut and spaceship."
          style={{ width: "80%", marginLeft: "10%" }}
        />
        <TextField
          autoFocus
          required
          label="Username"
          onChange={handleUsernameChange}
          value={username}
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Choose your username."
          error={isUsernameError}
          helperText={isUsernameError && validationErrorMsg}
        />
        <TextField
          required
          label="Email"
          onChange={handleEmailChange}
          value={email}
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Enter your email."
          error={isEmailError}
          helperText={isEmailError && validationErrorMsg}
        />
        <TextField
          required
          label="Password"
          onChange={handlePasswordChange}
          value={password}
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Enter your password."
          error={isPasswordError}
          helperText={isPasswordError && validationErrorMsg}
        />
        <TextField
          required
          label="Password confirmation"
          onChange={handlePasswordConfirmationChange}
          value={passwordConfirmation}
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Enter your password again."
          error={isPasswordConfirtmationError}
          helperText={isPasswordConfirtmationError && validationErrorMsg}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "0.5rem" }}
        >
          Register
        </Button>
      </form>
      {shouldRedirect && <Redirect to="/login" />}
    </Paper>
  );
}

export default UserRegisterForm;
