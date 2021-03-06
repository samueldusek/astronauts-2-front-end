import React, { useState } from "react";
import useInputState from "./hooks/useInputState";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import img from "./img/logo2.svg";
import { astronautValidation } from "./validations/astronauts";
import styles from "./styles/AddAstronautFormstyles";

const useStyles = makeStyles(() => styles);

function AddAstronautForm(props) {
  const [validationErrorMsg, setValidationErrorMsg] = useState("");
  const { handleAstronaut, history, astronauts } = props;
  const { id } = props.match.params || "";
  const classes = useStyles();
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
      const { key } = error.details[0].context;
      if (key === "firstName") {
        setFirstNameIsValError(true);
      } else if (key === "lastName") {
        setLastNameIsValError(true);
      } else if (key === "birthday") {
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
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <form onSubmit={handleSubmit}>
          <Typography component="h1" variant="h4" align="center">
            Add new team member
          </Typography>
          <img
            className={classes.image}
            src={img}
            alt="Astronaut and spaceship."
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
    </div>
  );
}

export default AddAstronautForm;
