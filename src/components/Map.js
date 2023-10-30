import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = ({ ...props }) => {
  return (
    <MapView
      {...props}
      provider="google"
      showsUserLocation={true}
      showsMyLocationButton={true}
      loadingEnabled={true}
      style={styles.map}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
