import React from "react";
import Page from "../../components/Page";
import { Button, Text } from "react-native-paper";
import { AppContext } from "../../../App";
import { useNavigation } from "@react-navigation/native";

function Logout() {
  const { handleLogout, openSnackbar } = React.useContext(AppContext);
  const navigation = useNavigation();

  console.log(handleLogout);

  return (
    <Page withBackBtn={true}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 16,
          color: "#000",
        }}
      >
        Logout
      </Text>
      <Button
        onPress={() => {
          handleLogout();
          openSnackbar("Successfully logged out");
          navigation.navigate("Main");
        }}
        style={{
          backgroundColor: "#000",
          borderRadius: 6,
          marginTop: 36,
        }}
        textColor="#fff"
      >
        Logout
      </Button>
    </Page>
  );
}

export default Logout;
