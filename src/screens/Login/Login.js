import { StyleSheet, View } from "react-native";
import Page from "../../components/Page";
import Pressable from "../../components/Pressable";
import { Button, Text, TextInput } from "react-native-paper";
import React from "react";
import isEmail from "validator/es/lib/isEmail";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");

  const handleLogin = () => {
    if (isEmail(email) === false) {
      alert("Please enter a valid email.");
      return;
    }

    alert("Success");
  };

  return (
    <Page>
      <TextInput
        value={email}
        onChangeText={setEmail}
        underlineColor="#000"
        textColor="#000"
        activeUnderlineColor="#000"
        style={styles.input}
        label="Email"
      />
      <Pressable onPress={handleLogin} style={styles.btn} mode="elevated">
        Login
      </Pressable>
      <View style={styles.signupView}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Button onPress={() => navigation.navigate("Signup")} textColor="#000">
          Sign up
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
  signupView: {
    marginTop: 16,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  signupText: {
    color: "rgba(0, 0, 0, 0.3)",
  },
});

export default Login;
