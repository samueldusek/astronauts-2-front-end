import { Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import astronautsSeed from "./astronautsSeed";
import AstronautsList from "./AstronautsList";
import NavBar from "./NavBar";
import AddAstronautForm from "./AddAstronautForm";
import UserRegisterForm from "./UserRegisterForm";
import UserLoginForm from "./UserLoginForm";
import axios from "axios";

function App() {
  const [astronauts, setAstronauts] = useState([]);
  const addAstronaut = (astronaut) => {
    const newAstronaut = { ...astronaut, id: uuidv4() };
    setAstronauts([...astronauts, newAstronaut]);
  };
  useEffect(() => {
    async function getAllAstronauts() {
      const response = await axios({
        method: "get",
        baseURL: "http://localhost:3000/api/",
        url: "/astronauts",
        headers: { jwtToken: window.localStorage.getItem("token") },
      });
      setAstronauts(response.data);
    }
    getAllAstronauts();
  }, [astronauts]);
  return (
    <div className="App">
      <NavBar />
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
        <Route exact path="/login" render={() => <UserLoginForm />} />
        <Route exact path="/register" render={() => <UserRegisterForm />} />
      </Switch>
    </div>
  );
}

export default App;
