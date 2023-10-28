import React from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = React.useState(initialValue);

  const toggleValue = React.useCallback(() => {
    setValue((prevValue) => {
      return !prevValue;
    });
  }, []);

  return [value, toggleValue];
};

export default useToggle;
