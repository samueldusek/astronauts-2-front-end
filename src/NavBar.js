import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "./img/logo2.svg";
import theme from "./theme";

import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "white",
  },
  title: {
    color: "rgba(0, 0, 0, 0.87)",
    flexGrow: 1,
    display: "flex",
    textTransform: "uppercase",
    letterSpacing: "0.3rem",
  },
  navImage: {
    maxHeight: "25px",
    marginLeft: "0.4rem",
  },
}));

function NavBar(props) {
  const { isUserLoggedIn, logout } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Astronauts{" "}
              <img
                src={logo}
                alt="Astronaut and spaceship."
                className={classes.navImage}
              />
            </Typography>
            {isUserLoggedIn && (
              <>
                <Button
                  class={classes.btn}
                  color="primary"
                  variant="contained"
                  component={Link}
                  to="/astronauts"
                >
                  All astronauts
                </Button>
                <Button
                  class={classes.btn}
                  color="primary"
                  variant="contained"
                  component={Link}
                  to="/astronauts/add"
                  style={{ marginLeft: "1rem" }}
                >
                  Add astronaut
                </Button>
                <Button
                  class={classes.btn}
                  color="primary"
                  variant="contained"
                  component={Link}
                  to="/"
                  style={{ marginLeft: "1rem" }}
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </>
            )}
            {!isUserLoggedIn && (
              <>
                <Button
                  class={classes.btn}
                  color="primary"
                  variant="contained"
                  component={Link}
                  to="/register"
                  style={{ marginLeft: "1rem" }}
                >
                  Sign up
                </Button>
                <Button
                  class={classes.btn}
                  color="primary"
                  variant="contained"
                  component={Link}
                  to="/login"
                  style={{ marginLeft: "1rem" }}
                >
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}

export default NavBar;
