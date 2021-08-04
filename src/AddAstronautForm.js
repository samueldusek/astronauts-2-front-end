import React, { useState } from "react";
import useInputState from "./hooks/useInputState";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography } from "@material-ui/core";
import img from "./img/logo2.svg";
import { astronautValidation } from "./validations/astronauts";

function AddAstronautForm(props) {
  const [validationErrorMsg, setValidationErrorMsg] = useState("");
  const { handleAstronaut, history, astronauts } = props;
  const { id } = props.match.params || "";
  let initFirstName = "";
  let initLastName = "";
  let initBirthday = "";
  let initSuperpower = "";

  const astronautToEdit =
    astronauts.find((astronaut) => astronaut._id === id) || false;

  if (astronautToEdit) {
    initFirstName = astronautToEdit.firstName;
    initLastName = astronautToEdit.lastName;
    initBirthday = astronautToEdit.birthday.toISOString().slice(0, 10);
    initSuperpower = astronautToEdit.superpower;
  }

  const [
    firstName,
    handleFirstnameChange,
    resetFirstname,
    isFirstNameValError,
    setFirstNameIsValError,
  ] = useInputState(initFirstName, false);

  const [
    lastName,
    handleLastnameChange,
    resetLastname,
    isLastNameValError,
    setLastNameIsValError,
  ] = useInputState(initLastName, false);

  const [
    birthday,
    handleBirthdayChange,
    resetBirthday,
    isBirthdayValError,
    setBirthdayIsValError,
  ] = useInputState(initBirthday, false);

  const [
    superpower,
    handleSuperpowerChange,
    resetSuperpower,
    isSuperpowerValError,
    setSuperpowerIsValError,
  ] = useInputState(initSuperpower, false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const birthdayDate = new Date(birthday);
    const newAstronaut = {
      firstName,
      lastName,
      birthday: birthdayDate,
      superpower,
    };
    const { error } = astronautValidation(newAstronaut);
    if (error) {
      if (error.details[0].context.key === "firstName") {
        setFirstNameIsValError(true);
      } else if (error.details[0].context.key === "lastName") {
        setLastNameIsValError(true);
      } else if (error.details[0].context.key === "birthday") {
        setBirthdayIsValError(true);
      } else {
        setSuperpowerIsValError(true);
      }
      setValidationErrorMsg(error.details[0].message);
    } else {
      handleAstronaut(newAstronaut, id);
      resetFirstname();
      resetLastname();
      resetBirthday();
      resetSuperpower();
      history.push("/astronauts");
    }
  };
  return (
    <Paper
      elevation={3}
      style={{
        maxWidth: "450px",
        margin: "2rem auto",
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
          error={isFirstNameValError}
          helperText={isFirstNameValError && validationErrorMsg}
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
          error={isLastNameValError}
          helperText={isLastNameValError && validationErrorMsg}
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
          error={isBirthdayValError}
          helperText={isBirthdayValError && validationErrorMsg}
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
          error={isSuperpowerValError}
          helperText={isSuperpowerValError && validationErrorMsg}
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
