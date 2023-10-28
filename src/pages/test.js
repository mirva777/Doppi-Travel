import React from "react";
import Page from "../components/Page";
import { StyleSheet, Text } from "react-native";
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import CustomModal from "../components/CustomModal";
import { checkRegionValidity } from "../utils";

const uzbekistanRegion = {
  latitude: 41.3111,
  longitude: 69.2401,
  latitudeDelta: 15,
  longitudeDelta: 15,
};

const Test = () => {
  const [selectedPoi, setSelectedPoi] = React.useState(null);
  const [currRegion, setCurrRegion] = React.useState(null);
  const { isLoading, isGranted, currRegion: initialRegion } = useLocation();

  React.useEffect(() => {
    if (!initialRegion) {
      return;
    }

    setCurrRegion(initialRegion);
  }, [initialRegion]);

  const handleRegionChange = (newRegion) => {
    if (checkRegionValidity(newRegion, uzbekistanRegion) === false) {
      setCurrRegion(uzbekistanRegion);
    }
  };

  return (
    <Page style={styles.page}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isGranted === false ? (
        <Text>Please enable location permissions</Text>
      ) : (
        <Map
          onPoiClick={(e) =>
            setSelectedPoi({
              name: e.nativeEvent.name,
              location: e.nativeEvent.coordinate,
            })
          }
          region={currRegion}
          onRegionChange={handleRegionChange}
        ></Map>
      )}
      <CustomModal
        visible={Boolean(selectedPoi)}
        onClose={() => setSelectedPoi(null)}
        title={selectedPoi?.name}
      />
    </Page>
  );
};

const styles = StyleSheet.create({
  page: {
    position: "relative",
  },
});

export default Test;
