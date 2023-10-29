import React from "react";
import * as Location from "expo-location";
import useToggle from "./useToggle";

const useLocation = () => {
  const [isGranted, setIsGranted] = React.useState(false);
  const [currRegion, setCurrRegion] = React.useState(null);
  const [isLoading, toggleLoading] = useToggle(true);

  React.useEffect(() => {
    const fetchData = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        toggleLoading();
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setCurrRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      });
      setIsGranted(true);
      toggleLoading();
    };
    console.log(111);

    fetchData();
  }, []);

  return {
    isGranted,
    currRegion,
    isLoading,
  };
};

export default useLocation;
