import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styles from "./styles/HomePageStyles";

const useStyles = makeStyles(() => styles);

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h1 className={classes.heading}>
          Know
          <br />
          your
          <br />
          astronauts
        </h1>
        <p className={classes.subtitle}>
          Keep records about your astronauts. Fast, easy and simple.
        </p>
        <Button
          className={classes.signupButton}
          color="secondary"
          variant="contained"
          component={Link}
          to="/register"
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
