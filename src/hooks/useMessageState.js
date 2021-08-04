import { useState } from "react";

const useMessageState = () => {
  const initMessage = {
    type: "",
    text: "",
  };
  const [message, setMessage] = useState(initMessage);
  const [isMessage, setIsMessage] = useState(false);
  const hideAndClearMessage = () => {
    setMessage(initMessage);
    setIsMessage(false);
  };
  return [isMessage, message, setIsMessage, setMessage, hideAndClearMessage];
};

export default useMessageState;
