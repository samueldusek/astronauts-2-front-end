import { useState } from "react";

const useMessageState = (isMessageInit, messageInit) => {
  const [isMessage, setIsMessage] = useState(isMessageInit);
  const [message, setMessage] = useState(messageInit);
  const hideAndClearMessage = () => {
    setIsMessage(false);
    setMessage("");
  };
  return [isMessage, message, setIsMessage, setMessage, hideAndClearMessage];
};

export default useMessageState;
