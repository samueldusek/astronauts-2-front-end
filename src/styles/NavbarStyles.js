import sizes from "./sizes";

const styles = {
  root: {
    [sizes.down("sm")]: {
      height: "80px",
    },
  },
  navbar: {
    height: "100%",
    backgroundColor: "white",
  },
  toolbar: {
    [sizes.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  title: {
    color: "rgba(0, 0, 0, 0.87)",
    flexGrow: 1,
    display: "flex",
    textTransform: "uppercase",
    letterSpacing: "0.3rem",
    [sizes.down("sm")]: {
      marginTop: "0.2rem",
    },
  },
  navImage: {
    maxHeight: "25px",
    marginLeft: "0.4rem",
  },
  buttons: {
    [sizes.down("xs")]: {
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
    },
  },
  button: {
    marginLeft: "1rem",
    [sizes.down("xs")]: {
      fontSize: "0.65rem",
      marginLeft: "0rem",
    },
  },
};

export default styles;
