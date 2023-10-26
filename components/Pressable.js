import React from "react";
import { StyleSheet, Pressable as NativePressable } from "react-native";
import Text from "./Text";

const Pressable = ({ children, ...props }) => {
  return (
    <NativePressable {...props} style={styles.btn}>
      <Text style={styles.text}>{children}</Text>
    </NativePressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 4,
    backgroundColor: "#000",
    minWidth: 160,
    borderRadius: 6,
  },
  text: {
    textAlign: "center",
    color: "#f3e7e7",
    fontSize: 15,
  },
});

export default Pressable;
