import React from "react";
import useInputState from "./hooks/useInputState";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography } from "@material-ui/core";

function UserRegisterForm() {
  const [username, handleUsernameChange, resetUsername] = useInputState("");
  const [email, handleEmailChange, resetEmail] = useInputState("");
  const [password, handlePasswordChange, resetPassword] = useInputState("");
  const [
    passwordConfirmation,
    handlePasswordConfirmationChange,
    resetPasswordConfirmation,
  ] = useInputState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
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
        <Typography component="h1" variant="h5" align="center">
          Register
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
          placeholder="Enter the username."
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
          placeholder="Enter the email."
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
    </Paper>
  );
}

export default UserRegisterForm;
