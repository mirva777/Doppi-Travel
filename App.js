import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./src/screens/Signup";
import Main from "./src/screens/Main";
import { PaperProvider, MD3DarkTheme } from "react-native-paper";
import { AppRegistry } from "react-native";
import Recommendations from "./src/screens/Recommendations";
import Hotels from "./src/screens/Hotels";
import Restaurants from "./src/screens/Restaurants";
import Tours from "./src/screens/Tours";
import Login from "./src/screens/Login/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={MD3DarkTheme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: "slide_from_right",
            headerShown: false,
          }}
          initialRouteName="Signup"
        >
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Recommendations" component={Recommendations} />
          <Stack.Screen name="Hotels" component={Hotels} />
          <Stack.Screen name="Restaurants" component={Restaurants} />
          <Stack.Screen name="Tours" component={Tours} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
AppRegistry.registerComponent("App", () => App);
