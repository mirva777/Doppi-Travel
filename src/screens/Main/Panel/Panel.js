import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import { Divider, Text } from "react-native-paper";
import Loader from "../../../components/Loader";
import { View } from "react-native";
import { getTwoRandomNumbersFromSum, range } from "../../../utils";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import PanelOverviewTab from "./PanelOverviewTab";
import PanelPhotosTab from "./PanelPhotosTab";
import PanelReviewsTab from "./PanelReviewsTab";

const apiKey = "AIzaSyCT-VHH-zXNZqZIO5QSLr0qsZu1U42sfBQ";
const placeholderImgSrc =
  "https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1";

const Panel = ({ selectedPoi }, ref) => {
  const [index, setIndex] = React.useState(0);
  console.log(selectedPoi?.photos);
  const [routes] = React.useState([
    { key: "first", title: "Overview" },
    { key: "second", title: `Photos` },
    { key: "third", title: `Reviews` },
  ]);

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
          <Loader />
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
                      return <Icon size={16} name="star" color={"#FFD700"} />;
                    }
                    return <Icon size={16} name="star" color="#808080" />;
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
