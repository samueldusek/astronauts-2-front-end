import { Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import astronautsSeed from "./astronautsSeed";
import AstronautsList from "./AstronautsList";
import NavBar from "./NavBar";
import AddAstronautForm from "./AddAstronautForm";
import UserRegisterForm from "./UserRegisterForm";

function App() {
  const [astronauts, setAstronauts] = useState(astronautsSeed);
  const addAstronaut = (astronaut) => {
    const newAstronaut = { ...astronaut, id: uuidv4() };
    setAstronauts([...astronauts, newAstronaut]);
  };
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/add"
          render={(routeProps) => (
            <AddAstronautForm addAstronaut={addAstronaut} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/"
          render={() => <AstronautsList astronauts={astronauts} />}
        />
        <Route exact path="/register" render={() => <UserRegisterForm />} />
      </Switch>
    </div>
  );
}

export default App;
