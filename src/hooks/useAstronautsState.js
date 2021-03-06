import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "./../data";

const useAstronautsState = (initialValue, isUserLoggedIn) => {
  const [astronauts, setAstronauts] = useState(initialValue);
  useEffect(() => {
    async function getAllAstronauts() {
      const response = axios({
        method: "get",
        baseURL: API_URL,
        url: "/astronauts",
        headers: { jwtToken: window.localStorage.getItem("token") },
      });
      return response;
    }
    if (isUserLoggedIn) {
      getAllAstronauts()
        .then(function (response) {
          const fetchedAstronauts = response.data;
          const editedFetchedAstronauts = fetchedAstronauts.map((astronaut) => {
            return {
              ...astronaut,
              birthday: new Date(astronaut.birthday),
            };
          });
          setAstronauts(editedFetchedAstronauts);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [isUserLoggedIn]);
  return {
    astronauts,
    setAstronauts,
    addAstronaut: (astronautToAdd) => {
      const updatedAstronauts = [...astronauts, astronautToAdd];
      setAstronauts(updatedAstronauts);
    },
    deleteAstronaut: (astronautId) => {
      const updatedAstronauts = astronauts.filter(
        (astronaut) => astronaut._id !== astronautId
      );
      setAstronauts(updatedAstronauts);
    },
    editAstronaut: (astronautToUpdate) => {
      const updatedAstronauts = astronauts.map((astronaut) => {
        return astronaut._id === astronautToUpdate._id
          ? astronautToUpdate
          : astronaut;
      });
      setAstronauts(updatedAstronauts);
    },
  };
};

export default useAstronautsState;
