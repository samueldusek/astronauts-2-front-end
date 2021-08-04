import React, { useState } from "react";
import useInputState from "./hooks/useInputState";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";
import img from "./img/logo2.svg";
import { loginValidation } from "./validations/users";
import styles from "./styles/UserLoginFormStyles";

const useStyles = makeStyles(() => styles);

function UserLoginForm({ setIsUserLoggedIn, setIsMessage, setMessage }) {
  const classes = useStyles();
  const [validationErrorMsg, setValidationErrorMsg] = useState("");
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
          window.localStorage.setItem("token", response.data.user.token);
          const { success } = response.data;
          if (success) {
            setMessage({ type: "success", text: success.message });
            setIsMessage(true);
          }
          setIsUserLoggedIn(true);
          setShouldRedirect(true);
        })
        .catch(function (error) {
          const errorData = error.response.data.error;
          if (errorData) {
            setIsUsernameError(true);
            setIsPasswordError(true);
            setMessage({ type: "error", text: errorData.message });
            setIsMessage(true);
          }
        });
    }
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <form onSubmit={handleSubmit}>
          <Typography component="h1" variant="h3" align="center">
            Welcome back!
          </Typography>
          <img
            className={classes.image}
            src={img}
            alt="Astronaut and spaceship."
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
    </div>
  );
}

export default UserLoginForm;
