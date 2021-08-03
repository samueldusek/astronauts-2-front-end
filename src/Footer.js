import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "auto",
  },
  footer: {
    backgroundColor: "#212529",
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    margin: "0 3px",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.footer}>
      <Toolbar>
        <Typography variant="caption" className={classes.title} align="center">
          &copy;Astronauts. Created by
          <Link to="https://github.com/samueldusek" className={classes.link}>
            Samuel Dušek
          </Link>
          with Node.JS, MongoDB a React.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
