import React from "react";
import { ActivityIndicator } from "react-native-paper";

const Loader = ({ ...props }) => {
  return <ActivityIndicator color="#000" {...props} />;
};

export default Loader;
