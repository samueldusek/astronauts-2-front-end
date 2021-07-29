import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import astronautsSeed from "./astronautsSeed";
import AstronautsList from "./AstronautsList";
import NavBar from "./NavBar";
import AddAstronautForm from "./AddAstronautForm";

function App() {
  const [astronauts, setAstronauts] = useState(astronautsSeed);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/add" render={() => <AddAstronautForm />} />
        <Route
          exact
          path="/"
          render={() => <AstronautsList astronauts={astronauts} />}
        />
      </Switch>
    </div>
  );
}

export default App;
