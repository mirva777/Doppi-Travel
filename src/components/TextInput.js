import React from "react";
import { TextInput as PaperTextInput } from "react-native-paper";

const TextInput = ({ ...props }) => {
  return (
    <PaperTextInput
      placeholderTextColor="#00000033"
      secureTextEntry={true}
      textColor="#f3e7e7"
      activeUnderlineColor="#f3e7e7"
      backgroundColor="black"
      {...props}
    />
  );
};

export default TextInput;
