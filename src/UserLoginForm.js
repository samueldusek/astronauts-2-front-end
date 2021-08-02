import React, { useState } from "react";
import useInputState from "./hooks/useInputState";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";

function UserLoginForm(props) {
  const { setIsUserLoggedIn } = props;
  const [username, handleUsernameChange, resetUsername] = useInputState("");
  const [password, handlePasswordChange, resetPassword] = useInputState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios({
      method: "post",
      baseURL: "http://localhost:3000/api/",
      url: "/users/login",
      data: {
        username: username,
        password: password,
      },
    })
      .then(function (response) {
        console.log(response.data.user);
        window.localStorage.setItem("token", response.data.user.token);
        setIsUserLoggedIn(true);
        setShouldRedirect(true);
      })
      .catch(function (error) {
        console.log(error);
      });

    resetUsername();
    resetPassword();
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
        <Typography component="h1" variant="h5" align="center">
          Log in
        </Typography>
        <TextField
          autoFocus
          required
          label="Username"
          onChange={handleUsernameChange}
          value={username}
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Enter your username."
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
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "0.5rem" }}
        >
          Log in
        </Button>
      </form>
      {shouldRedirect && <Redirect to="/astronauts" />}
    </Paper>
  );
}

export default UserLoginForm;
