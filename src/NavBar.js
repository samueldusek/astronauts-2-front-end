import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "./img/logo2.svg";
import styles from "./styles/NavbarStyles";

const useStyles = makeStyles(() => styles);

function NavBar(props) {
  const { isUserLoggedIn, logout } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Astronauts
            <img
              src={logo}
              alt="Astronaut and spaceship."
              className={classes.navImage}
            />
          </Typography>
          {isUserLoggedIn && (
            <div className={classes.buttons}>
              <Button
                className={[classes.button, classes.buttonFirst].join(" ")}
                color="primary"
                variant="contained"
                component={Link}
                to="/astronauts"
              >
                All astronauts
              </Button>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                component={Link}
                to="/astronauts/add"
              >
                Add astronaut
              </Button>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                component={Link}
                to="/"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </div>
          )}
          {!isUserLoggedIn && (
            <div className={classes.buttons}>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                component={Link}
                to="/register"
              >
                Sign up
              </Button>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                component={Link}
                to="/login"
              >
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
