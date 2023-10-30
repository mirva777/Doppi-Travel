import React from "react";
import Page from "../components/Page";
import Text from "../components/Text";

const Tours = ({ navigation }) => {
  return (
    <Page navigation={navigation} withBackButton={true}>
      <Text>Tours</Text>
    </Page>
  );
};

export default Tours;
