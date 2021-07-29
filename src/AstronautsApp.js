import React, { useState } from "react";
import astronautsSeed from "./astronautsSeed";
import AstronautsList from "./AstronautsList";

const AstronautsApp = () => {
  const [astronauts, setAstronauts] = useState(astronautsSeed);
  return (
    <div>
      <h1>Astronauts App</h1>
      <AstronautsList astronauts={astronauts} />
    </div>
  );
};

export default AstronautsApp;
