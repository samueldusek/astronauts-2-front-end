import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import background from "./img/logo3.svg";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "auto 135%",
    backgroundRepeat: "no-repeat",
  },
  title: {
    width: "80%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
  },
  heading: {
    fontSize: "7rem",
    color: "white",
  },
  subtitle: {
    color: "white",
    fontSize: "2rem",
  },
  signupButton: {
    width: "150px",
    margin: "2rem auto",
  },
}));

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
