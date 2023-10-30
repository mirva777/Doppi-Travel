import React from "react";
import Page from "../../components/Page";
import Pressable from "../../components/Pressable";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Text from "../../components/Text";
import { Button, TextInput } from "react-native-paper";
import isEmail from "validator/es/lib/isEmail";

const StepOne = () => {
  const [email, setEmail] = React.useState("");
  const navigation = useNavigation();

  const handleSignup = () => {
    if (isEmail(email) === false) {
      alert("Please enter a valid email.");
      return;
    }

    alert("Success");
  };

  return (
    <Page>
      <TextInput
        underlineColor="#000"
        textColor="#000"
        activeUnderlineColor="#000"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        label="Email"
      />
      <Pressable onPress={handleSignup} style={styles.btn} mode="elevated">
        Signup
      </Pressable>
      <View style={styles.loginView}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <Button onPress={() => navigation.navigate("Login")} textColor="#000">
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
  loginView: {
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
