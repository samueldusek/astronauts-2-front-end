import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import myTheme from "./theme";
import img from "./img/logo2.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
  tableContainer: {
    margin: "auto",
    marginTop: "2rem",
  },
  tableHeader: {
    backgroundColor: "#212529",
  },
  tableHeaderCell: {
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "end",
  },
}));

function AstronautsList(props) {
  const { astronauts, deleteAstronaut } = props;
  const classes = useStyles(myTheme);
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>#</TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Firstname
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Lastname
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Birthday
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Superpower
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Options
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {astronauts.map((astronaut, index) => (
                <TableRow key={astronaut._id} hover>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{astronaut.firstName}</TableCell>
                  <TableCell>{astronaut.lastName}</TableCell>
                  <TableCell>
                    {astronaut.birthday
                      .toLocaleString("en-GB", {
                        timeZone: "UTC",
                      })
                      .slice(0, 10)}
                  </TableCell>
                  <TableCell>{astronaut.superpower}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="edit"
                      component={Link}
                      to={`/astronauts/${astronaut._id}`}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => deleteAstronaut(astronaut._id)}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Container
          maxWidth={false}
          disableGutters={true}
          className={classes.buttonContainer}
        >
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/astronauts/add"
          >
            Add astronaut
          </Button>
        </Container>
      </Container>
    </div>
  );
}

export default AstronautsList;
