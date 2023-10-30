import React from "react";
import Page from "../../components/Page";
import Pressable from "../../components/Pressable";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Text from "../../components/Text";
import { Button, TextInput } from "react-native-paper";

const StepOne = () => {
  const navigation = useNavigation();
  return (
    <Page>
      <TextInput
        underlineColor="#000"
        textColor="#000"
        activeUnderlineColor="#000"
        style={styles.input}
        label="Email"
      />
      <Pressable
        onPress={() => navigation.navigate("step-2")}
        style={styles.btn}
        mode="elevated"
      >
        Signup
      </Pressable>
      <View textColor="#000" style={styles.loginBtn} mode="text">
        <Text style={styles.loginText}>Already have an account?</Text>
        <Button onPress={() => console.log(1)} textColor="#000">
          Login
        </Button>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 16,
    width: "100%",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
  },
  loginBtn: {
    marginTop: 16,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loginText: {
    color: "rgba(0, 0, 0, 0.3)",
  },
});

export default StepOne;
