import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import img from "./img/logo.svg";
import styles from "./styles/Page404Styles";

const useStyles = makeStyles((theme) => styles);

function Page404() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h1 className={classes.heading}>It looks like you lost!</h1>
        <p className={classes.subtitle}>Try to click on the rocket.</p>
        <p className={classes.subtitle}>
          Hopefully, it will help you reach your destination.
        </p>
        <Link to="/">
          <img src={img} alt="Spaceship" className={classes.image} />
        </Link>
      </div>
    </div>
  );
}

export default Page404;
