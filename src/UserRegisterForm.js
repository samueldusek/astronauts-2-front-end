import React, { useState } from "react";
import useInputState from "./hooks/useInputState";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";
import img from "./img/logo2.svg";

function UserRegisterForm() {
  const [username, handleUsernameChange, resetUsername] = useInputState("");
  const [email, handleEmailChange, resetEmail] = useInputState("");
  const [password, handlePasswordChange, resetPassword] = useInputState("");
  const [
    passwordConfirmation,
    handlePasswordConfirmationChange,
    resetPasswordConfirmation,
  ] = useInputState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const handleSubmit = async (evt) => {
    evt.preventDefault();

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
