import React from "react";
import useInputState from "./hooks/useInputState";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography } from "@material-ui/core";

function AddAstronautForm() {
  const [firstname, handleFirstnameChange, resetFirstname] = useInputState("");
  const [lastname, handleLastnameChange, resetLastname] = useInputState("");
  const [birthday, handleBirthdayChange, resetBirthday] = useInputState("");
  const [superpower, handleSuperpowerChange, resetSuperpower] =
    useInputState("");
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
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          resetFirstname();
          resetLastname();
          resetBirthday();
          resetSuperpower();
        }}
      >
        <Typography component="h1" variant="h5" align="center">
          New Astronaut
        </Typography>
        <TextField
          autoFocus
          required
          label="Firstname"
          onChange={handleFirstnameChange}
          value={firstname}
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Enter the firstname."
        />
        <TextField
          required
          label="Lastname"
          onChange={handleLastnameChange}
          value={lastname}
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Enter the lastname."
        />
        <TextField
          required
          label="Birthday"
          onChange={handleBirthdayChange}
          value={birthday}
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Enter the birthday."
        />
        <TextField
          required
          label="Superpower"
          onChange={handleSuperpowerChange}
          value={superpower}
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Enter the superpower."
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "0.5rem" }}
        >
          Save astronaut
        </Button>
      </form>
    </Paper>
  );
}

export default AddAstronautForm;
