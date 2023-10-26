import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";

const Text = ({ children, ...props }) => {
  return (
    <NativeText style={styles.text} {...props}>
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Cochin",
  },
});

export default Text;
