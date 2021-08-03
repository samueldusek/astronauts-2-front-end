import React from "react";
import useInputState from "./hooks/useInputState";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography } from "@material-ui/core";
import img from "./img/logo2.svg";

function AddAstronautForm(props) {
  const { handleAstronaut, history, astronauts } = props;
  const { id } = props.match.params || "";
  let initFirstName = "";
  let initLastName = "";
  let initBirthday = "";
  let initSuperpower = "";

  const astronautToEdit =
    astronauts.find((astronaut) => astronaut._id === id) || false;
  console.log(astronautToEdit);
  if (astronautToEdit) {
    initFirstName = astronautToEdit.firstName;
    initLastName = astronautToEdit.lastName;
    initBirthday = astronautToEdit.birthday.toISOString().slice(0, 10);
    initSuperpower = astronautToEdit.superpower;
  }
  const [firstName, handleFirstnameChange, resetFirstname] =
    useInputState(initFirstName);
  const [lastName, handleLastnameChange, resetLastname] =
    useInputState(initLastName);
  const [birthday, handleBirthdayChange, resetBirthday] =
    useInputState(initBirthday);
  const [superpower, handleSuperpowerChange, resetSuperpower] =
    useInputState(initSuperpower);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const birthdayDate = new Date(birthday);
    const newAstronaut = {
      firstName,
      lastName,
      birthday: birthdayDate,
      superpower,
    };
    handleAstronaut(newAstronaut, id);
    resetFirstname();
    resetLastname();
    resetBirthday();
    resetSuperpower();
    history.push("/astronauts");
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
          Add new team member
        </Typography>
        <img
          src={img}
          alt="Astronaut and spaceship."
          style={{ width: "80%", marginLeft: "10%", marginTop: "1rem" }}
        />
        <TextField
          autoFocus
          required
          label="Firstname"
          onChange={handleFirstnameChange}
          value={firstName}
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Enter the firstname."
        />
        <TextField
          required
          label="Lastname"
          onChange={handleLastnameChange}
          value={lastName}
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Enter the lastname."
        />
        <TextField
          id="date"
          label="Birthday"
          type="date"
          value={birthday}
          onChange={handleBirthdayChange}
          variant="outlined"
          margin="normal"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
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
