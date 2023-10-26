import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
          headerShown: false,
        }}
        initialRouteName="Details"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Details" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
