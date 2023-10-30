import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Page = ({ children, withBackBtn = false }) => {
  const navigation = useNavigation();

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
      <View style={styles.innerView}>
        {withBackBtn && (
          <IconButton
            mode="contained"
            style={styles.backBtn}
            icon="chevron-left"
            iconColor="#fff"
            onPress={() => {
              navigation.goBack();
            }}
          />
        )}
        {children}
      </View>
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

  innerView: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 48,
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backBtn: {
    position: "absolute",
    top: 100,
    left: 35,
  },
});

export default Page;
