import React from "react";
import Page from "../../components/Page";
import CodeInput from "../../components/CodeInput";
import { StyleSheet } from "react-native";
import Pressable from "../../components/Pressable";
import Text from "../../components/Text";

const CODE_LENGTH = 4;

const StepTwo = ({ navigation }) => {
  const [code, setCode] = React.useState("");

  const handleConfirm = () => {
    if (code.length < CODE_LENGTH) {
      return alert("Please enter the code");
    }

    navigation.navigate("Main");
  };

  return (
    <Page>
      <Text style={styles.text} variant="labelLarge">
        Enter the sms you received
      </Text>
      <CodeInput value={code} onValueChange={setCode} length={CODE_LENGTH} />
      <Pressable onPress={handleConfirm} style={styles.btn}>
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
