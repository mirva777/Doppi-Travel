import React from "react";
import Page from "../../components/Page";
import Pressable from "../../components/Pressable";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../../firebase";
import firebase from "firebase/compat";
import { AppContext } from "../../../App";

const StepOne = () => {
  const { openSnackbar } = React.useContext(AppContext);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const navigation = useNavigation();
  const recaptchaRef = React.useRef(null);

  const handleSignup = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaRef.current)
      .then((code) => {
        navigation.navigate("step-2", {
          verificationCode: code,
          phoneNumber,
        });
      })
      .catch((err) => {
        openSnackbar("Error occured. Check if you wrote the number correctly");
      });
  };

  return (
    <Page withBackBtn={true}>
      <TextInput
        underlineColor="#000"
        textColor="#000"
        activeUnderlineColor="#000"
        style={styles.input}
        value={phoneNumber}
        keyboardType="phone-pad"
        onChangeText={setPhoneNumber}
        label="Phone number"
        type="number"
      />
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaRef}
        firebaseConfig={firebaseConfig}
      />
      <Pressable onPress={handleSignup} style={styles.btn} mode="elevated">
        Signup
      </Pressable>
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
});

export default StepOne;
