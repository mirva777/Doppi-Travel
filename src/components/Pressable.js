import React from "react";
import { Button } from "react-native-paper";

const Pressable = ({ children, style, ...props }) => {
  return (
    <Button
      buttonColor="black"
      textColor="#f3e7e7"
      style={{
        borderRadius: 6,
        ...style,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Pressable;
