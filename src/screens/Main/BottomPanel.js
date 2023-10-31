import React from "react";
import { Image, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import { Chip, Text } from "react-native-paper";
import Loader from "../../components/Loader";
import { View } from "react-native";
import { range } from "../../utils";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const apiKey = "AIzaSyCT-VHH-zXNZqZIO5QSLr0qsZu1U42sfBQ";
const placeholderImgSrc =
  "https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1";

const BottomPanel = ({ selectedPoi }, ref) => {
  return (
    <GestureHandlerRootView style={styles.view}>
      <Modalize modalStyle={styles.modal} ref={ref}>
        {selectedPoi === "loading" ? (
          <Loader />
        ) : (
          <View>
            <Image
              style={styles.banner}
              source={{
                uri:
                  selectedPoi?.photos?.length > 0
                    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${selectedPoi?.photos[0]?.width}&photo_reference=${selectedPoi?.photos[0]?.photo_reference}&key=${apiKey}`
                    : placeholderImgSrc,
              }}
            />
            <View
              style={{
                padding: 16,
              }}
            >
              <Text style={styles.title}>{selectedPoi?.name}</Text>
              <Text
                style={{
                  color: "#000",
                  marginBottom: 10,
                  marginTop: 6,
                }}
              >
                {range(0, selectedPoi?.rating || 0).map((index) => {
                  if (index < selectedPoi?.rating) {
                    return <Icon name="star" color={"#FFD700"} />;
                  }
                  return <Icon name="star" color="#808080" />;
                })}
              </Text>
              <Text
                style={{
                  color: "#000",
                  marginBottom: 10,
                }}
              >
                {selectedPoi?.address}
              </Text>
              <Text
                style={{
                  color: "#000",
                  marginBottom: 10,
                }}
              >
                <Chip
                  style={
                    selectedPoi?.isOpen
                      ? { backgroundColor: "green" }
                      : { backgroundColor: "#FF0000" }
                  }
                >
                  {selectedPoi?.isOpen ? "Open" : "Closed"}
                </Chip>
              </Text>
              <Text
                style={{
                  color: "#000",
                  marginBottom: 10,
                }}
              >
                {selectedPoi?.weekday}
              </Text>
            </View>
          </View>
        )}
      </Modalize>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
  },
  modal: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  banner: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 10,
  },
});

export default React.forwardRef(BottomPanel);
