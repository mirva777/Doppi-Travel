import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import { checkRegionValidity } from "../utils";
import Loader from "../components/Loader";
import Icon from "react-native-vector-icons/FontAwesome";
import useToggle from "../hooks/useToggle";
import Sidebar from "../components/Sidebar";
import { IconButton } from "react-native-paper";

const uzbekistanRegion = {
  latitude: 41.3111,
  longitude: 69.2401,
  latitudeDelta: 15,
  longitudeDelta: 15,
};

const Main = ({ navigation }) => {
  const [selectedPoi, setSelectedPoi] = React.useState(null);
  const [currRegion, setCurrRegion] = React.useState(null);
  const { isLoading, isGranted, currRegion: initialRegion } = useLocation();
  const [isSidebarOpen, toggleSidebar] = useToggle(false);

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
    <View style={styles.page}>
      {isLoading ? (
        <Loader size="large" />
      ) : isGranted === false ? (
        <Text>Please enable location permissions</Text>
      ) : (
        <Map
          onPoiClick={(e) => {
            setSelectedPoi({
              name: e.nativeEvent.name,
              location: e.nativeEvent.coordinate,
            });
          }}
          region={currRegion}
          onRegionChange={handleRegionChange}
        />
      )}
      <Sidebar
        navigation={navigation}
        visible={isSidebarOpen}
        onDismiss={toggleSidebar}
      />
      <IconButton
        mode="contained"
        iconColor="#fff"
        onPress={toggleSidebar}
        style={styles.menuIcon}
        icon="menu"
        size={24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  menuIcon: {
    position: "absolute",
    top: 70,
    right: 20,
  },
});

export default Main;
