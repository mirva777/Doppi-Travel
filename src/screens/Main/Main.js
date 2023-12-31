import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../../components/Map";
import Loader from "../../components/Loader";
import useToggle from "../../hooks/useToggle";
import Sidebar from "./Sidebar";
import { IconButton } from "react-native-paper";
import { AppContext } from "../../../App";
import axios from "axios";
import Panel from "./Panel";
import { apiKey } from "../../constants";

const placesApiUrl = "https://maps.googleapis.com/maps/api/place/details/json";

const Main = ({ route: { params } }) => {
  const { openSnackbar } = React.useContext(AppContext);
  const [selectedPoi, setSelectedPoi] = React.useState(null);
  const { isLocationGranted, isLocationLoading, currLocation } =
    React.useContext(AppContext);
  const [isSidebarOpen, toggleSidebar] = useToggle(false);
  const modalizeRef = React.useRef(null);

  const handleModalizeOpen = () => {
    modalizeRef.current?.open();
  };

  const handleModalizeClose = () => {
    modalizeRef.current?.close();
  };

  const handlePoiPress = async (e) => {
    setSelectedPoi("loading");

    handleModalizeOpen();

    const placeId = e.nativeEvent.placeId;

    try {
      const res = await axios(
        `${placesApiUrl}?key=${apiKey}&placeid=${placeId}`
      );
      const { result } = res.data;
      setSelectedPoi({
        id: result.place_id,
        rating: result.rating,
        type: result.types[0],
        userRatingsTotal: result.user_ratings_total,
        address: result.vicinity,
        isOpen: result.opening_hours?.open_now,
        weekday: result.opening_hours?.weekday_text,
        reviews: result.reviews,
        name: result.name,
        photos: result.photos,
      });
      handleModalizeOpen();
    } catch (error) {
      handleModalizeClose();
      openSnackbar("Something went wrong");
    }
  };

  React.useEffect(() => {
    if (!params || !params.id) {
      return;
    }

    setSelectedPoi(params);
    handleModalizeOpen();
  }, [params]);

  return (
    <View style={styles.page}>
      {isLocationLoading ? (
        <Loader size="large" />
      ) : isLocationGranted === false ? (
        <Text>Please enable location permissions</Text>
      ) : (
        <>
          <Map onPoiClick={handlePoiPress} initialRegion={currLocation} />
          <Sidebar visible={isSidebarOpen} onDismiss={toggleSidebar} />
          <IconButton
            mode="contained"
            iconColor="#fff"
            onPress={toggleSidebar}
            style={styles.menuIcon}
            icon="menu"
            size={24}
          />
          <Panel ref={modalizeRef} selectedPoi={selectedPoi} />
        </>
      )}
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
