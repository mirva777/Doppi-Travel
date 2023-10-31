import axios from "axios";
import React from "react";
import { View } from "react-native";
import { Button, IconButton, TextInput } from "react-native-paper";
import { AppContext } from "../../../App";
import { useNavigation } from "@react-navigation/native";

const apiKey = "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";

const Chat = () => {
  const { openSnackbar } = React.useContext(AppContext);
  const [prompt, setPrompt] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const res = await axios.post(
        `https://api.openai.com/v1/engines/davinci/completions`,
        {
          prompt,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      openSnackbar("GPT is not working at the moment. Try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 48,
      }}
    >
      <TextInput
        style={{
          width: 300,
          backgroundColor: "#fff",
          color: "#000",
        }}
        value={prompt}
        onChangeText={setPrompt}
      />
      <Button
        loading={isLoading}
        onPress={handleSubmit}
        style={{
          marginTop: 16,
          backgroundColor: "#000",
          borderRadius: 6,
          width: "100%",
        }}
        textColor="#fff"
        mode="contained"
      >
        Submit
      </Button>
      <IconButton
        style={{
          position: "absolute",
          top: 56,
          left: 24,
          backgroundColor: "#000",
        }}
        iconColor="#fff"
        icon={"chevron-left"}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Chat;
