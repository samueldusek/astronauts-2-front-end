import { v4 as uuidv4 } from "uuid";

const astronauts = [
  {
    id: uuidv4(),
    firstname: "John",
    lastname: "McRohn",
    birthday: new Date(1978, 5, 6),
    superpower: "Flying",
  },
  {
    id: uuidv4(),
    firstname: "Peter",
    lastname: "Man",
    birthday: new Date(1978, 5, 6),
    superpower: "Laser eyes",
  },
  {
    id: uuidv4(),
    firstname: "Mark",
    lastname: "Parick",
    birthday: new Date(1978, 5, 6),
    superpower: "Underwater breathing",
  },
  {
    id: uuidv4(),
    firstname: "Ken",
    lastname: "Burn",
    birthday: new Date(1978, 5, 6),
    superpower: "Running fast",
  },
  {
    id: uuidv4(),
    firstname: "Paddy",
    lastname: "McQuark",
    birthday: new Date(1978, 5, 6),
    superpower: "To be invisible",
  },
  {
    id: uuidv4(),
    firstname: "Pavel",
    lastname: "Orel",
    birthday: new Date(1978, 5, 6),
    superpower: "Extremely strong",
  },
  {
    id: uuidv4(),
    firstname: "Benji",
    lastname: "Ortega",
    birthday: new Date(1978, 5, 6),
    superpower: "Reading thoughts",
  },
];

export default astronauts;
