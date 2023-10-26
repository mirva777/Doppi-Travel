import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Page = ({ children }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImg} source={require("../assets/logo.png")} />
      <Image style={styles.bgImage} source={require("../assets/page-bg.png")} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  logoImg: {
    position: "absolute",
    width: 125,
    height: 50,
    top: 60,
  },
});

export default Page;
