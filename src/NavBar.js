import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Astronauts
          </Typography>
          <Button variant="contained" component={Link} to="/">
            All astronauts
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/add"
            style={{ marginLeft: "1rem" }}
          >
            Add astronaut
          </Button>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
