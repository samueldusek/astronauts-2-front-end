import { useState } from "react";
import jwtDecode from "jwt-decode";

function useUserState() {
  let initialValue = false;
  const token = window.localStorage.getItem("token");
  if (token) {
    const decodedToken = jwtDecode(token);
    const now = new Date().getTime() / 1000;
    if (decodedToken.exp > now) {
      initialValue = true;
    } else {
      window.localStorage.removeItem("token");
    }
  }
  const [isLoggedIn, setIsLoggedIn] = useState(initialValue);
  const logoutUser = () => {
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return [isLoggedIn, setIsLoggedIn, logoutUser];
}

export default useUserState;
