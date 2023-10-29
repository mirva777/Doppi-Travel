import React from "react";
import { StyleSheet } from "react-native";
import { Text as PaperText } from "react-native-paper";

const Text = ({ children, style, ...props }) => {
  return (
    <PaperText style={[styles.text, style]} {...props}>
      {children}
    </PaperText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#000",
  },
});

export default Text;
