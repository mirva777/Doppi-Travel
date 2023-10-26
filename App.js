import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import TextInput from "./components/TextInput";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="+998 99 089 40 16" />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
