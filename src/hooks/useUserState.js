import { useState } from "react";

function useUserState(initialValue) {
  const isToken = window.localStorage.getItem("token") ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(isToken || initialValue);
  return [isLoggedIn, setIsLoggedIn];
}

export default useUserState;
