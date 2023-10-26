import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import TextInput from "./components/TextInput";
import Page from "./components/Page";

export default function App() {
  return (
    <Page style={styles.container}>
      <Image source={require("./assets/logo.png")} />
      <TextInput placeholder="+998 99 089 40 16" />
      <StatusBar />
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
