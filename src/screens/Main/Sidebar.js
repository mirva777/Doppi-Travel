import React from "react";
import { Pressable, Text, View } from "react-native";
import { Image } from "react-native";
import { Avatar, Modal, Portal } from "react-native-paper";
import { sidebarItems } from "./constants";

const Sidebar = ({ visible, navigation, onDismiss }) => {
  return (
    <Portal>
      <Modal style={styles.modal} visible={visible} onDismiss={onDismiss}>
        <View style={styles.modalWrapper}>
          <Image
            style={styles.logo}
            source={require("../../../assets/logo.png")}
          />
          <View style={styles.wrapper}>
            <View style={styles.btnList}>
              {sidebarItems.map((item) => {
                return (
                  <Pressable key={item.id}>
                    <Text
                      onPress={() => {
                        navigation.navigate(item.slug);
                        onDismiss();
                      }}
                      style={styles.btnText}
                    >
                      {item.title}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            <View>
              <Pressable onPress={() => console.log(1)} style={styles.account}>
                <Avatar.Icon
                  color="#000"
                  backgroundColor="#fff"
                  size={24}
                  icon="account"
                />
                <Text>Not logged in</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = {
  modal: {
    width: "80%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: -50,
  },
  modalWrapper: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 90,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  logo: {
    width: 90,
    height: 36,
  },
  btnList: {
    flexDirection: "column",
    gap: 20,
    paddingVertical: 20,
  },
  wrapper: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  account: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
};

export default Sidebar;
