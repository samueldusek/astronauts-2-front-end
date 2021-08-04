import { Route, Switch, Redirect } from "react-router-dom";
import useAstronautsState from "./hooks/useAstronautsState";
import AstronautsList from "./AstronautsList";
import NavBar from "./NavBar";
import AddAstronautForm from "./AddAstronautForm";
import UserRegisterForm from "./UserRegisterForm";
import UserLoginForm from "./UserLoginForm";
import axios from "axios";
import useUserState from "./hooks/useUserState";
import HomePage from "./HomePage";
import Footer from "./Footer";
import "./App.css";
import theme from "./theme";
import ProtectedRoute from "./ProtectedRoute";

import { ThemeProvider } from "@material-ui/styles";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn, logoutUser] = useUserState(false);
  const {
    astronauts,
    setAstronauts,
    addAstronaut,
    deleteAstronaut,
    editAstronaut,
  } = useAstronautsState([], isUserLoggedIn);

  const handleAddAstronaut = (astronaut) => {
    axios({
      method: "post",
      baseURL: "http://localhost:3000/api/",
      url: "/astronauts",
      headers: { jwtToken: window.localStorage.getItem("token") },
      data: {
        firstName: astronaut.firstName,
        lastName: astronaut.lastName,
        birthday: astronaut.birthday.toISOString(),
        superpower: astronaut.superpower,
      },
    })
      .then(function (response) {
        const newAstronaut = { ...astronaut, _id: response.data.astronaut._id };
        addAstronaut(newAstronaut);
        return response.data;
      })
      .catch(function (error) {
        return error.response.data;
      });
  };

  const handleEditAstronaut = (astronaut, id) => {
    axios({
      method: "put",
      baseURL: "http://localhost:3000/api/",
      url: `/astronauts/${id}`,
      headers: { jwtToken: window.localStorage.getItem("token") },
      data: {
        firstName: astronaut.firstName,
        lastName: astronaut.lastName,
        birthday: astronaut.birthday.toISOString(),
        superpower: astronaut.superpower,
      },
    })
      .then(function (response) {
        const editedAstronaut = { ...astronaut, _id: id };
        editAstronaut(editedAstronaut);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDeleteAstronaut = (astronautId) => {
    axios({
      method: "delete",
      baseURL: "http://localhost:3000/api/",
      url: `/astronauts/${astronautId}`,
      headers: { jwtToken: window.localStorage.getItem("token") },
    })
      .then(function (response) {
        deleteAstronaut(astronautId);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar isUserLoggedIn={isUserLoggedIn} logout={logoutUser} />
        <Switch>
          <Route
            exact
            path="/login"
            render={(routeProps) => (
              <UserLoginForm
                setIsUserLoggedIn={setIsUserLoggedIn}
                {...routeProps}
              />
            )}
          />
          <Route exact path="/register" render={() => <UserRegisterForm />} />
          <Route exact path="/" render={() => <HomePage />} />
          <ProtectedRoute
            isUserLoggedIn={isUserLoggedIn}
            exact
            path="/astronauts"
            component={AstronautsList}
            astronauts={astronauts}
            deleteAstronaut={handleDeleteAstronaut}
          />
          <ProtectedRoute
            isUserLoggedIn={isUserLoggedIn}
            exact
            path="/astronauts/add"
            component={AddAstronautForm}
            astronauts={astronauts}
            handleAstronaut={handleAddAstronaut}
          />
          <ProtectedRoute
            isUserLoggedIn={isUserLoggedIn}
            exact
            path="/astronauts/:id"
            component={AddAstronautForm}
            astronauts={astronauts}
            handleAstronaut={handleEditAstronaut}
          />
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
