import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { apiKey } from "../../../constants";

const PanelPhotosTab = ({ photos = [] }) => {
  return (
    <View>
      {photos.length === 0 && <Text>No photo available</Text>}
      <ScrollView>
        <View
          style={{
            gap: 24,
            paddingBottom: 24,
          }}
        >
          {photos.map((photo, index) => {
            return (
              <Image
                key={index}
                style={{
                  width: "100%",
                  height: 240,
                }}
                source={{
                  uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photo.width}&photo_reference=${photo.photo_reference}&key=${apiKey}`,
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default PanelPhotosTab;
