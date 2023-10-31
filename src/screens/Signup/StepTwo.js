import React from "react";
import Page from "../../components/Page";
import CodeInput from "../../components/CodeInput";
import { StyleSheet } from "react-native";
import Pressable from "../../components/Pressable";
import Text from "../../components/Text";
import firebase from "firebase/compat";
import useToggle from "../../hooks/useToggle";
import { AppContext } from "../../../App";
import { useNavigation } from "@react-navigation/native";

const CODE_LENGTH = 6;

const StepTwo = ({ route }) => {
  const { handleLogin, openSnackbar } = React.useContext(AppContext);
  const [code, setCode] = React.useState("");
  const [isLoading, toggleLoading] = useToggle(false);
  const navigate = useNavigation();

  const handleConfirm = async () => {
    if (code.length < CODE_LENGTH) {
      return alert("Please enter the code");
    }

    toggleLoading();

    try {
      const credentials = firebase.auth.PhoneAuthProvider.credential(
        route.params.verificationCode,
        code
      );
      const res = await firebase.auth().signInWithCredential(credentials);
      handleLogin({
        phoneNumber: res.user.phoneNumber,
        id: res.user.uid,
      });
      openSnackbar("Successfully logged in");
      navigate.navigate("Main");
    } catch (error) {
      openSnackbar("Invalid code");
    } finally {
      toggleLoading();
    }
  };

  return (
    <Page>
      <Text style={styles.text} variant="labelLarge">
        Enter the sms you received
      </Text>
      <CodeInput value={code} onValueChange={setCode} length={CODE_LENGTH} />
      <Pressable loading={isLoading} onPress={handleConfirm} style={styles.btn}>
        Confirm
      </Pressable>
    </Page>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    marginBottom: 16,
  },
  btn: {
    marginTop: 16,
    width: "80%",
  },
});

export default StepTwo;
