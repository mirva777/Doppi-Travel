import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const TextInput = ({ ...props }) => {
  return (
    <NativeTextInput
      placeholderTextColor="#00000033"
      style={styles.input}
      secureTextEntry={true}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 8,
    minWidth: 200,
    backgroundColor: "#fafafa",
    color: "#000",
    width: 200,
    height: 43,
    fontWeight: "700",
    textAlign: "center",
    shadowColor: "#00000083",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default TextInput;
