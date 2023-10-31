import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import { Button, Divider, Text } from "react-native-paper";
import Loader from "../../../components/Loader";
import { View } from "react-native";
import { getTwoRandomNumbersFromSum, range } from "../../../utils";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import PanelOverviewTab from "./PanelOverviewTab";
import PanelPhotosTab from "./PanelPhotosTab";
import PanelReviewsTab from "./PanelReviewsTab";
import { AppContext } from "../../../../App";
import { apiKey, placeholderImgSrc } from "../../../constants";

const Panel = ({ selectedPoi }, ref) => {
  const { user, openSnackbar } = React.useContext(AppContext);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Overview" },
    { key: "second", title: `Photos` },
    { key: "third", title: `Reviews` },
  ]);
  const [isRecommending, setIsRecommending] = React.useState(false);
  const [recommendedPlaces, setRecommendedPlaces] = React.useState([]);

  const renderScene = SceneMap({
    first: () => (
      <PanelOverviewTab
        address={selectedPoi?.address}
        workingHours={selectedPoi?.weekday}
      />
    ),
    second: () => <PanelPhotosTab photos={selectedPoi?.photos} />,
    third: () => <PanelReviewsTab reviews={selectedPoi?.reviews} />,
  });

  const ratings = React.useMemo(() => {
    if (!selectedPoi || selectedPoi === "loading") {
      return [0, 0];
    }

    return getTwoRandomNumbersFromSum(selectedPoi?.userRatingsTotal);
  }, [selectedPoi]);

  const handleRecommendPress = () => {
    if (!user) {
      openSnackbar("You need to login first.");
      return;
    }
    if (recommendedPlaces.includes(selectedPoi.id)) {
      openSnackbar("You can only recommend once.");
      return;
    }

    setIsRecommending(true);
    setTimeout(() => {
      setIsRecommending(false);
      setRecommendedPlaces([...recommendedPlaces, selectedPoi.id]);
    }, 1500);
  };

  return (
    <GestureHandlerRootView style={styles.view}>
      <Modalize
        handleStyle={{
          backgroundColor: "#000",
        }}
        modalStyle={styles.modal}
        ref={ref}
      >
        {selectedPoi === "loading" ? (
          <Loader
            style={{
              marginTop: 24,
            }}
          />
        ) : (
          <View>
            <Image
              style={styles.banner}
              source={{
                uri:
                  selectedPoi?.photos?.length > 0
                    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${selectedPoi?.photos[0]?.width}&photo_reference=${selectedPoi?.photos[0]?.photo_reference}&key=${apiKey}`
                    : placeholderImgSrc,
              }}
            />
            <View
              style={{
                padding: 16,
              }}
            >
              <Text style={styles.title}>{selectedPoi?.name}</Text>
              {selectedPoi?.rating ? (
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: 10,
                  }}
                >
                  {range(5).map((index) => {
                    if (index <= selectedPoi.rating) {
                      return (
                        <Icon
                          key={index}
                          size={16}
                          name="star"
                          color={"#FFD700"}
                        />
                      );
                    }
                    return (
                      <Icon key={index} size={16} name="star" color="#808080" />
                    );
                  })}
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 8,
                      gap: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      {selectedPoi.rating}
                    </Text>
                    <View>
                      <Text
                        style={{
                          color: "#000",
                        }}
                      >
                        {ratings[0]} Citizen ratings
                      </Text>
                      <Text
                        style={{
                          color: "#000",
                        }}
                      >
                        {ratings[1]} Tourist ratings
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                <Text
                  style={{
                    color: "#808080",
                    marginVertical: 10,
                  }}
                >
                  No Rating
                </Text>
              )}
              <Button
                loading={isRecommending}
                onPress={handleRecommendPress}
                textColor={
                  recommendedPlaces.includes(selectedPoi?.id) ? "#000" : "#fff"
                }
                style={{
                  backgroundColor: recommendedPlaces.includes(selectedPoi?.id)
                    ? "#fff"
                    : "#000",
                  borderStyle: "solid",
                  borderColor: "#000",
                  borderWidth: recommendedPlaces.includes(selectedPoi?.id)
                    ? 1
                    : 0,
                  borderRadius: 6,
                }}
              >
                {recommendedPlaces.includes(selectedPoi?.id)
                  ? "Recommended"
                  : "Recommend"}
              </Button>
              <Divider
                style={{
                  marginLeft: -16,
                  marginRight: -16,
                  marginVertical: 10,
                  backgroundColor: "#999",
                }}
              />
              <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                pagerStyle={{
                  height: 320,
                  backgroundColor: "transparent",
                  marginTop: 18,
                }}
                initialLayout={{
                  width: Dimensions.get("window").width,
                  height: Dimensions.get("window").height,
                }}
                renderTabBar={(props) => {
                  return (
                    <TabBar
                      {...props}
                      style={{
                        backgroundColor: "transparent",
                      }}
                      tabStyle={{
                        width: "auto",
                      }}
                      indicatorStyle={{
                        backgroundColor: "#000",
                      }}
                      activeColor="#000"
                      inactiveColor="#e5e5e5"
                    />
                  );
                }}
              />
            </View>
          </View>
        )}
      </Modalize>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
  },
  modal: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  banner: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 10,
  },
});

export default React.forwardRef(Panel);
