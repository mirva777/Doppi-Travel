import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/pages/Login";
import Main from "./src/pages/Main";
import PasswordConfirmation from "./src/pages/PasswordConfirmation";
import { PaperProvider, MD3DarkTheme } from "react-native-paper";
import { AppRegistry } from "react-native";
import Recommendations from "./src/pages/Recommendations";
import Hotels from "./src/pages/Hotels";
import Restaurants from "./src/pages/Restaurants";
import Tours from "./src/pages/Tours";

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
          initialRouteName="Main"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Confirmation" component={PasswordConfirmation} />
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
