import React from "react";
import { CodeField, Cursor } from "react-native-confirmation-code-field";
import Text from "./Text";
import { StyleSheet } from "react-native";

const CodeInput = ({ value, onValueChange, length }) => {
  return (
    <CodeField
      style={styles.codeFieldRoot}
      value={value}
      onChangeText={onValueChange}
      cellCount={length}
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Text key={index} style={[styles.cell, isFocused && styles.focusCell]}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "#fafafa",
    marginRight: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: 5,
    overflow: "hidden",
    shadowOpacity: 0.1,
  },
  focusCell: {
    borderWidth: 2,
    borderColor: "#000",
  },
});

export default CodeInput;
