import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import AstronautsList from "./AstronautsList";
import NavBar from "./NavBar";
import AddAstronautForm from "./AddAstronautForm";
import UserRegisterForm from "./UserRegisterForm";
import UserLoginForm from "./UserLoginForm";
import axios from "axios";

function App() {
  const [astronauts, setAstronauts] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
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
        const newAstronaut = { ...astronaut, id: response.data.astronaut._id };
        setAstronauts([...astronauts, newAstronaut]);
      })
      .catch(function (error) {
        console.log(error);
      });
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
    getAllAstronauts();
  }, [isUserLoggedIn]);
  return (
    <div className="App">
      <NavBar isUserLoggedIn={isUserLoggedIn} />
      <Switch>
        <Route
          exact
          path="/astronauts/add"
          render={(routeProps) => (
            <AddAstronautForm addAstronaut={addAstronaut} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/astronauts"
          render={() => <AstronautsList astronauts={astronauts} />}
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
