import { StyleSheet } from "react-native";
import Page from "../../components/Page";
import TextInput from "../../components/TextInput";
import Pressable from "../../components/Pressable";

const Login = ({ navigation }) => {
  return (
    <Page>
      <TextInput style={styles.input} label="Email" />
      <Pressable
        onPress={() => navigation.navigate("Confirmation")}
        style={styles.btn}
        mode="elevated"
      >
        Hello there
      </Pressable>
    </Page>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 16,
  },
  input: {
    width: "100%",
  },
});

export default Login;
