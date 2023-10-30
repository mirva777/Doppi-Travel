import React from "react";
import { StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import { Text } from "react-native-paper";

const BottomPanel = ({ selectedPoi }) => {
  const modalizeRef = React.useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  React.useEffect(() => {
    modalizeRef.current.open();
  }, []);

  return (
    <GestureHandlerRootView>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>
      <Modalize modalStyle={styles.modal} ref={modalizeRef}>
        <Text>Hi</Text>
      </Modalize>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomPanel;
