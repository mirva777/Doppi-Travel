import React from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomModal = ({ title, onClose, ...props }) => {
  return (
    <Modal animationType="slide" transparent={true} {...props}>
      <View style={styles.modalView}>
        <Pressable onPress={onClose} style={styles.closeBtn}>
          <Icon
            name="close"
            size={24}
            color="#fff"
            backgroundColor="transparent"
          />
        </Pressable>
        <Text style={styles.modalTitle}>{title}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: "absolute",
    bottom: 0,
    height: "60%",
    width: "100%",
    marginTop: 22,
    backgroundColor: "#fff",
    padding: 20,
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  closeBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -75,
    right: 12,
  },
});

export default CustomModal;
