import React, { useState } from "react";
import useInputState from "./hooks/useInputState";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";
import img from "./img/logo2.svg";
const { loginValidation } = require("./validations/users");

function UserLoginForm(props) {
  const [validationErrorMsg, setValidationErrorMsg] = useState("");
  const { setIsUserLoggedIn } = props;
  const [
    username,
    handleUsernameChange,
    resetUsername,
    isUsernameError,
    setIsUsernameError,
  ] = useInputState("", false);
  const [
    password,
    handlePasswordChange,
    resetPassword,
    isPasswordError,
    setIsPasswordError,
  ] = useInputState("", false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { error } = loginValidation({ username, password });
    if (error) {
      if (error.details[0].context.key === "username") {
        setIsUsernameError(true);
      } else {
        setIsPasswordError(true);
      }
      setValidationErrorMsg(error.details[0].message);
    } else {
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
        <Typography component="h1" variant="h3" align="center">
          Welcome back!
        </Typography>
        <img
          src={img}
          alt="Astronaut and spaceship."
          style={{ width: "80%", marginLeft: "10%" }}
        />
        <Typography
          component="h2"
          variant="h5"
          align="center"
          style={{ marginTop: "1rem" }}
        >
          Just log in and you are ready to lunch!
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
          error={isUsernameError}
          helperText={isUsernameError && validationErrorMsg}
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
