import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/pages/Login";
import Test from "./src/pages/test";
import PasswordConfirmation from "./src/pages/PasswordConfirmation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
          headerShown: false,
        }}
        initialRouteName="Test"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Confirmation" component={PasswordConfirmation} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
