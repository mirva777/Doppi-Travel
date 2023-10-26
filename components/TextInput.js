import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const TextInput = ({ ...props }) => {
  return (
    <NativeTextInput
      placeholderTextColor="#030303"
      style={styles.input}
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
    fontWeight: "700",
  },
});

export default TextInput;
