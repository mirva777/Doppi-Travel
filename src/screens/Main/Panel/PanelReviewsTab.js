import React from "react";
import { Image, ScrollView, View } from "react-native";
import { range } from "../../../utils";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "react-native-paper";

const PanelReviewsTab = ({ reviews = [] }) => {
  return (
    <ScrollView>
      <View
        style={{
          paddingBottom: 24,
          display: "flex",
          gap: 36,
        }}
      >
        {reviews?.length > 0 ? (
          reviews.map((review, index) => {
            return (
              <View key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 12,
                  }}
                >
                  <Image
                    width={36}
                    height={36}
                    borderRadius={18}
                    source={{ uri: review.profile_photo_url }}
                  />
                  <View>
                    <Text
                      style={{
                        color: "#808080",
                      }}
                    >
                      {review.author_name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 6,
                      }}
                    >
                      <Text>
                        {range(5).map((index) => {
                          if (index <= review.rating) {
                            return (
                              <Icon size={16} name="star" color={"#FFD700"} />
                            );
                          }
                          return <Icon size={16} name="star" color="#808080" />;
                        })}
                      </Text>
                      <Text>{review.relative_time_description}</Text>
                    </View>
                  </View>
                </View>
                <Text
                  style={{
                    color: "#000",
                    marginTop: 12,
                  }}
                >
                  {review.text}
                </Text>
              </View>
            );
          })
        ) : (
          <Text>No reviews available</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default PanelReviewsTab;
