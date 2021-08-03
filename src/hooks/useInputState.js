import { useState } from "react";

export default (initialInputVal, initialIsError) => {
  const [value, setValue] = useState(initialInputVal);
  const [isError, setIsError] = useState(initialIsError);
  const handleChange = (e) => {
    setValue(e.target.value);
    setIsError(false);
  };
  const reset = () => {
    setValue("");
    setIsError("");
  };
  return [value, handleChange, reset, isError, setIsError];
};
