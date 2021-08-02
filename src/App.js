import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import AstronautsList from "./AstronautsList";
import NavBar from "./NavBar";
import AddAstronautForm from "./AddAstronautForm";
import UserRegisterForm from "./UserRegisterForm";
import UserLoginForm from "./UserLoginForm";
import axios from "axios";
import useUserState from "./hooks/useUserState";

function App() {
  const [astronauts, setAstronauts] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useUserState(false);

  const addAstronaut = (astronaut) => {
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
        console.log(response.data.astronaut);
        const newAstronaut = { ...astronaut, _id: response.data.astronaut._id };
        setAstronauts([...astronauts, newAstronaut]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const editAstronaut = (astronaut, id) => {
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
        console.log(response.data.astronaut);
        const editedAstronaut = { ...astronaut, _id: id };
        const updatedAstronauts = astronauts.map((astronaut) => {
          return astronaut._id === id ? editedAstronaut : astronaut;
        });
        console.log(updatedAstronauts);
        setAstronauts([...updatedAstronauts]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteAstronaut = (astronautId) => {
    axios({
      method: "delete",
      baseURL: "http://localhost:3000/api/",
      url: `/astronauts/${astronautId}`,
      headers: { jwtToken: window.localStorage.getItem("token") },
    })
      .then(function (response) {
        console.log(response.data);
        const updatedAstronauts = astronauts.filter(
          (astronaut) => astronaut._id !== astronautId
        );
        setAstronauts(updatedAstronauts);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    setIsUserLoggedIn(false);
  };

  useEffect(() => {
    async function getAllAstronauts() {
      const response = await axios({
        method: "get",
        baseURL: "http://localhost:3000/api/",
        url: "/astronauts",
        headers: { jwtToken: window.localStorage.getItem("token") },
      });
      const fetchedAstronauts = response.data;
      const editedFetchedAstronauts = fetchedAstronauts.map((astronaut) => {
        return {
          ...astronaut,
          birthday: new Date(astronaut.birthday),
        };
      });
      setAstronauts(editedFetchedAstronauts);
    }
    if (isUserLoggedIn) {
      getAllAstronauts();
    }
  }, [isUserLoggedIn]);

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
              handleAstronaut={addAstronaut}
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
              deleteAstronaut={deleteAstronaut}
            />
          )}
        />
        <Route
          exact
          path="/astronauts/:id"
          render={(routeProps) => (
            <AddAstronautForm
              astronauts={astronauts}
              handleAstronaut={editAstronaut}
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
