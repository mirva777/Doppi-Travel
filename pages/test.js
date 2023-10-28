import React from "react";
import Page from "../components/Page";
import MapView from "react-native-maps";
import { Modal, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

const uzbekistanRegion = {
  latitude: 41.3111,
  longitude: 69.2401,
  latitudeDelta: 15,
  longitudeDelta: 15,
};

const Test = () => {
  const [selectedPoi, setSelectedPoi] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [mapRegion, setMapRegion] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });
    })();
  }, []);

  const handleRegionChange = (newRegion) => {
    if (
      newRegion.latitude <
        uzbekistanRegion.latitude - uzbekistanRegion.latitudeDelta / 2 ||
      newRegion.latitude >
        uzbekistanRegion.latitude + uzbekistanRegion.latitudeDelta / 2 ||
      newRegion.longitude <
        uzbekistanRegion.longitude - uzbekistanRegion.longitudeDelta / 2 ||
      newRegion.longitude >
        uzbekistanRegion.longitude + uzbekistanRegion.longitudeDelta / 2
    ) {
      setMapRegion(uzbekistanRegion);
    }
  };

  return (
    <Page style={styles.page} onPress={() => console.log("234")}>
      {errorMsg && <Text>{errorMsg}</Text>}
      {mapRegion ? (
        <MapView
          onPoiClick={(e) =>
            setSelectedPoi({
              name: e.nativeEvent.name,
              location: e.nativeEvent.coordinate,
            })
          }
          region={mapRegion}
          provider="google"
          showsUserLocation={true}
          collapsable={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          onRegionChange={handleRegionChange}
          loadingEnabled={true}
          style={styles.map}
        />
      ) : (
        <Text>loading...</Text>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={Boolean(selectedPoi)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{selectedPoi?.name}</Text>
        </View>
      </Modal>
    </Page>
  );
};

const styles = StyleSheet.create({
  page: {
    position: "relative",
  },
  map: {
    height: "100%",
    width: "100%",
  },
  modalView: {
    position: "absolute",
    bottom: 0,
    height: "50%",
    width: "100%",
    marginTop: 22,
    backgroundColor: "#fff",
    padding: 20,
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Test;
