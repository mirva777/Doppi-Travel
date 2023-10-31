import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";

const apiKey = "AIzaSyCT-VHH-zXNZqZIO5QSLr0qsZu1U42sfBQ";

const PanelPhotosTab = ({ photos = [] }) => {
  console.log(photos[1]);
  return (
    <View>
      {photos.length === 0 && <Text>No photo available</Text>}
      <ScrollView>
        <View
          style={{
            gap: 24,
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
