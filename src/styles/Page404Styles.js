import sizes from "./sizes";

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    width: "80%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
  heading: {
    fontSize: "4rem",
    color: "black",
    [sizes.down("sm")]: {
      fontSize: "3rem",
    },
  },
  subtitle: {
    color: "black",
    fontSize: "2rem",
    [sizes.down("xs")]: {
      fontSize: "1rem",
    },
  },
  image: {
    width: "100%",
    marginTop: "2rem",
  },
};

export default styles;
