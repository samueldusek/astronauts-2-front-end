import background from "../img/logo3.svg";

const styles = {
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "auto 135%",
    backgroundRepeat: "no-repeat",
  },
  title: {
    width: "80%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
    "& a:hover": {
      transform: "scale(1.1)",
    },
  },
  heading: {
    fontSize: "7rem",
    color: "white",
    textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
  },
  subtitle: {
    color: "white",
    fontSize: "2rem",
    textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
  },
  signupButton: {
    height: "50px",
    width: "180px",
    margin: "3rem auto",
    fontSize: "1.1rem",
    letterSpacing: "0.3rem",
    fontWeight: "bold",
  },
};

export default styles;
