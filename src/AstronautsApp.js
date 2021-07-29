import React, { useState } from "react";
import astronautsSeed from "./astronautsSeed";
import AstronautsList from "./AstronautsList";
import NavBar from "./NavBar";

const AstronautsApp = () => {
  const [astronauts, setAstronauts] = useState(astronautsSeed);
  return (
    <div>
      <NavBar />
      <AstronautsList astronauts={astronauts} />
    </div>
  );
};

export default AstronautsApp;
