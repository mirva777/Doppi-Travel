import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PanelOverviewTab = ({
  address,
  contact = "Not available",
  workingHours,
}) => {
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flexDirection: "row",
          gap: 12,
        }}
      >
        <Icon size={24} name={"map-marker"} color="#999" />
        <View>
          <Text
            style={{
              color: "#999",
              marginBottom: 12,
            }}
          >
            Address
          </Text>
          <Text
            style={{
              color: "#000",
            }}
          >
            {address}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 12,
        }}
      >
        <Icon size={24} name={"phone"} color="#999" />
        <View>
          <Text
            style={{
              color: "#999",
              marginBottom: 12,
            }}
          >
            Contact
          </Text>
          <Text
            style={{
              color: "#000",
            }}
          >
            {contact}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 12,
        }}
      >
        <Icon size={24} name={"clock-outline"} color="#999" />
        <View>
          <Text
            style={{
              color: "#999",
              marginBottom: 12,
            }}
          >
            Working Hours
          </Text>
          <View>
            {workingHours?.map((item, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    color: "#000",
                    fontSize: 12,
                    lineHeight: 18,
                  }}
                >
                  {item}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 16,
    gap: 24,
  },
});

export default PanelOverviewTab;
