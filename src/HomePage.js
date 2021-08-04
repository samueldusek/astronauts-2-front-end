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
    "& a:hover": {
      transform: "scale(1.1)",
    },
  },
  heading: {
    fontSize: "7rem",
    color: "white",
    textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
  },
  subtitle: {
    color: "white",
    fontSize: "2rem",
    textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
  },
  signupButton: {
    height: "50px",
    width: "180px",
    margin: "3rem auto",
    fontSize: "1.1rem",
    letterSpacing: "0.3rem",
    fontWeight: "bold",
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
