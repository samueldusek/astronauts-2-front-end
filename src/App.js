import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import useAstronautsState from "./hooks/useAstronautsState";
import AstronautsList from "./AstronautsList";
import NavBar from "./NavBar";
import AddAstronautForm from "./AddAstronautForm";
import UserRegisterForm from "./UserRegisterForm";
import UserLoginForm from "./UserLoginForm";
import axios from "axios";
import useUserState from "./hooks/useUserState";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useUserState(false);
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
      })
      .catch(function (error) {
        console.log(error);
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

  const logout = () => {
    window.localStorage.removeItem("token");
    setIsUserLoggedIn(false);
  };

  return (
    <div className="App">
      <NavBar isUserLoggedIn={isUserLoggedIn} logout={logout} />
      <Switch>
        <Route
          exact
          path="/astronauts/add"
          render={(routeProps) => (
            <AddAstronautForm
              astronauts={astronauts}
              handleAstronaut={handleAddAstronaut}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/astronauts"
          render={() => (
            <AstronautsList
              astronauts={astronauts}
              deleteAstronaut={handleDeleteAstronaut}
            />
          )}
        />
        <Route
          exact
          path="/astronauts/:id"
          render={(routeProps) => (
            <AddAstronautForm
              astronauts={astronauts}
              handleAstronaut={handleEditAstronaut}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={(routeProps) => (
            <UserLoginForm setIsUserLoggedIn={setIsUserLoggedIn} />
          )}
        />
        <Route exact path="/register" render={() => <UserRegisterForm />} />
      </Switch>
    </div>
  );
}

export default App;
