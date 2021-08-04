import { Route, Switch } from "react-router-dom";
import useAstronautsState from "./hooks/useAstronautsState";
import useMessageState from "./hooks/useMessageState";
import AstronautsList from "./AstronautsList";
import NavBar from "./NavBar";
import AddAstronautForm from "./AddAstronautForm";
import UserRegisterForm from "./UserRegisterForm";
import UserLoginForm from "./UserLoginForm";
import axios from "axios";
import useUserState from "./hooks/useUserState";
import HomePage from "./HomePage";
import Footer from "./Footer";
import "./App.css";
import theme from "./theme";
import ProtectedRoute from "./ProtectedRoute";
import Message from "./Message";

import { ThemeProvider } from "@material-ui/styles";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn, logoutUser] = useUserState(false);
  const { astronauts, addAstronaut, deleteAstronaut, editAstronaut } =
    useAstronautsState([], isUserLoggedIn);

  const [isMessage, message, setIsMessage, setMessage, hideAndClearMessage] =
    useMessageState(false, "");

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
        const { success } = response.data;
        if (success) {
          setMessage({ type: "success", text: success.message });
          setIsMessage(true);
        }
      })
      .catch(function (error) {
        const errorData = error.response.data.error;
        if (errorData) {
          setMessage({
            type: "error",
            text: "Something went wrong. Please try it again.",
          });
          setIsMessage(true);
        }
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
        const { success } = response.data;
        if (success) {
          setMessage({ type: "success", text: success.message });
          setIsMessage(true);
        }
      })
      .catch(function (error) {
        const errorData = error.response.data.error;
        if (errorData) {
          setMessage({
            type: "error",
            text: errorData.message,
          });
          setIsMessage(true);
        }
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
        const { success } = response.data;
        if (success) {
          setMessage({ type: "success", text: success.message });
          setIsMessage(true);
        }
      })
      .catch(function (error) {
        const errorData = error.response.data.error;
        if (errorData) {
          setMessage({
            type: "error",
            text: "Something went wrong. Please try it again.",
          });
          setIsMessage(true);
        }
      });
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar isUserLoggedIn={isUserLoggedIn} logout={logoutUser} />
        <Switch>
          <Route
            exact
            path="/login"
            render={(routeProps) => (
              <UserLoginForm
                setIsUserLoggedIn={setIsUserLoggedIn}
                setIsMessage={setIsMessage}
                setMessage={setMessage}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={() => (
              <UserRegisterForm
                setIsMessage={setIsMessage}
                setMessage={setMessage}
              />
            )}
          />
          <Route exact path="/" render={() => <HomePage />} />
          <ProtectedRoute
            isUserLoggedIn={isUserLoggedIn}
            exact
            path="/astronauts"
            component={AstronautsList}
            astronauts={astronauts}
            deleteAstronaut={handleDeleteAstronaut}
          />
          <ProtectedRoute
            isUserLoggedIn={isUserLoggedIn}
            exact
            path="/astronauts/add"
            component={AddAstronautForm}
            astronauts={astronauts}
            handleAstronaut={handleAddAstronaut}
          />
          <ProtectedRoute
            isUserLoggedIn={isUserLoggedIn}
            exact
            path="/astronauts/:id"
            component={AddAstronautForm}
            astronauts={astronauts}
            handleAstronaut={handleEditAstronaut}
          />
        </Switch>
        <Footer />
        {isMessage && (
          <Message
            hideAndClearMessage={hideAndClearMessage}
            open={isMessage}
            message={message}
          />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
