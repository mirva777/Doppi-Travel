import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Page = ({ children }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImageUpper}
        source={require("../../assets/page-bg-upper.png")}
      />
      <Image style={styles.logoImg} source={require("../../assets/logo.png")} />
      <Image
        style={styles.bgImage}
        source={require("../../assets/page-bg.png")}
      />
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
    left: 0,
    bottom: -35,
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  bgImageUpper: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    objectFit: "contain",
  },
  bgImage: {
    position: "absolute",
    left: 0,
    bottom: -35,
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  logoImg: {
    position: "absolute",
    width: 125,
    height: 50,
    top: 60,
  },
});

export default Page;
