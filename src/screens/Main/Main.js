import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../../components/Map";
import Loader from "../../components/Loader";
import useToggle from "../../hooks/useToggle";
import Sidebar from "./Sidebar";
import { IconButton } from "react-native-paper";
import { AppContext } from "../../../App";
import BottomPanel from "./BottomPanel";

const Main = () => {
  const [selectedPoi, setSelectedPoi] = React.useState(null);
  const { isLocationGranted, isLocationLoading, currLocation } =
    React.useContext(AppContext);
  const [isSidebarOpen, toggleSidebar] = useToggle(false);

  console.log(123);

  return (
    <View style={styles.page}>
      {isLocationLoading ? (
        <Loader size="large" />
      ) : isLocationGranted === false ? (
        <Text>Please enable location permissions</Text>
      ) : (
        <Map
          onPoiClick={(e) => {
            setSelectedPoi({
              name: e.nativeEvent.name,
              location: e.nativeEvent.coordinate,
            });
          }}
          initialRegion={currLocation}
        />
      )}
      <Sidebar visible={isSidebarOpen} onDismiss={toggleSidebar} />
      <IconButton
        mode="contained"
        iconColor="#fff"
        onPress={toggleSidebar}
        style={styles.menuIcon}
        icon="menu"
        size={24}
      />
      {/* <BottomPanel selectedPoi={selectedPoi} /> */}
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
