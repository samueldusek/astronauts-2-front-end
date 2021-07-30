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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    maxWidth: "900px",
    margin: "auto",
    marginTop: "2rem",
  },
});

function AstronautsList({ astronauts }) {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Firstname</TableCell>
                <TableCell>Lastname</TableCell>
                <TableCell>Birthday</TableCell>
                <TableCell>Superpower</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {astronauts.map((astronaut, index) => (
                <TableRow key={astronaut.id}>
                  <TableCell component="th" scope="row">
                    {index}
                  </TableCell>
                  <TableCell>{astronaut.firstname}</TableCell>
                  <TableCell>{astronaut.lastname}</TableCell>
                  <TableCell>
                    {astronaut.birthday
                      .toLocaleString("en-GB", {
                        timeZone: "UTC",
                      })
                      .slice(0, 10)}
                  </TableCell>
                  <TableCell>{astronaut.superpower}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default AstronautsList;
