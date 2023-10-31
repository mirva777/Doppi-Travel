import React from "react";
import Page from "../../components/Page";
import Text from "../../components/Text";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import { AppContext } from "../../../App";
import Loader from "../../components/Loader";
import { Image, Pressable, ScrollView, View } from "react-native";
import { getRandomOption, range } from "../../utils";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { apiKey, cities, placeholderImgSrc } from "../../constants";
import { Badge } from "react-native-paper";

const Hotels = () => {
  const { openSnackbar } = React.useContext(AppContext);
  const [selectedCity, setSelectedCity] = React.useState(null);
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigation = useNavigation();

  React.useEffect(() => {
    if (!selectedCity) {
      return;
    }

    const fetchHotels = async () => {
      setIsLoading(true);

      try {
        const res = await axios(
          `https://maps.googleapis.com/maps/api/place/textsearch/json`,
          {
            params: {
              query: `hotels in ${selectedCity}, Uzbekistan`,
              key: apiKey,
            },
          }
        );
        setResults(res.data.results);
      } catch (error) {
        openSnackbar("Something went wrong...");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotels();
  }, [selectedCity]);

  return (
    <Page withBackBtn={true}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        Hotels
      </Text>
      <RNPickerSelect
        style={{
          inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 4,
            color: "black",
            paddingRight: 30,
            backgroundColor: "white",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          },
          inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 8,
            color: "black",
            paddingRight: 30,
            backgroundColor: "white",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          },
        }}
        placeholder={{ label: "Select a city", value: null }}
        onValueChange={setSelectedCity}
        items={cities}
      />

      {isLoading ? (
        <Loader
          style={{
            marginTop: 24,
          }}
        />
      ) : (
        <ScrollView
          style={{
            marginTop: 24,
          }}
        >
          {results?.map((item, index) => {
            const recommendation = getRandomOption([
              "Top recommended by tourists",
              "Top recommended by citizens",
            ]);

            const name =
              item.name.length > 12
                ? item.name.slice(0, 12) + "..."
                : item.name;
            return (
              <Pressable
                key={item.place_id}
                onPress={() =>
                  navigation.navigate("Main", {
                    id: item.place_id,
                    rating: item.rating,
                    type: item.types[0],
                    userRatingsTotal: item.user_ratings_total,
                    address: item.vicinity,
                    isOpen: item.opening_hours?.open_now,
                    weekday: item.opening_hours?.weekday_text,
                    reviews: item.reviews,
                    name: item.name,
                    photos: item.photos,
                  })
                }
                style={{
                  flexDirection: "row",
                  gap: 16,
                  marginBottom: 16,
                }}
                id={item.place_id}
              >
                <Image
                  width="40%"
                  height={90}
                  source={{
                    uri:
                      item.photos?.length > 0
                        ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=${apiKey}`
                        : placeholderImgSrc,
                  }}
                />
                <View>
                  <View>
                    <Text>{name}</Text>
                    <Text>
                      {range(5).map((index) => {
                        return (
                          <Icon
                            key={index}
                            name="star"
                            color={index < item.rating ? "gold" : "gray"}
                          />
                        );
                      })}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 4,
                      marginTop: 6,
                    }}
                  >
                    <Icon name="map-marker" color={"#000"} />
                    <Text>{selectedCity}</Text>
                  </View>
                  {index === 0 ? (
                    <Badge
                      size={18}
                      style={{
                        marginTop: 8,
                        backgroundColor: "blue",
                        color: "#fff",
                        width: "100%",
                        borderRadius: 4,
                      }}
                    >
                      Sponsored
                    </Badge>
                  ) : (
                    <Text
                      style={{
                        width: 124,
                        fontSize: 12,
                        marginTop: 8,
                      }}
                    >
                      {recommendation}
                    </Text>
                  )}
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      )}
    </Page>
  );
};

export default Hotels;
