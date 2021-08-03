import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform: "uppercase",
  },
}));

function NavBar(props) {
  const { isUserLoggedIn, logout } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Astronauts
          </Typography>
          {isUserLoggedIn && (
            <>
              <Button variant="contained" component={Link} to="/astronauts">
                All astronauts
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="/astronauts/add"
                style={{ marginLeft: "1rem" }}
              >
                Add astronaut
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="/login"
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
                variant="contained"
                component={Link}
                to="/register"
                style={{ marginLeft: "1rem" }}
              >
                Sign up
              </Button>
              <Button
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
    </div>
  );
}

export default NavBar;
