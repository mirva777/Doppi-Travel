import { StyleSheet, View } from "react-native";
import Page from "../components/Page";
import Text from "../components/Text";
import TextInput from "../components/TextInput";
import Pressable from "../components/Pressable";

const Login = ({ navigation }) => {
  return (
    <Page>
      <Text style={styles.text}>Enter your mobile number.</Text>
      <TextInput placeholder="+998 99 089 40 16" />
      <Pressable
        onPress={() => navigation.navigate("Confirmation")}
        style={styles.btn}
      >
        Next
      </Pressable>
    </Page>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  btn: {
    marginTop: 16,
  },
});

export default Login;
