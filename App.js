import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./src/screens/Signup";
import Main from "./src/screens/Main";
import { PaperProvider, MD3DarkTheme, Snackbar } from "react-native-paper";
import { AppRegistry } from "react-native";
import Hotels from "./src/screens/Hotels";
import Restaurants from "./src/screens/Restaurants";
import Tours from "./src/screens/Tours";
import React from "react";
import useLocation from "./src/hooks/useLocation";
import Text from "./src/components/Text";
import Logout from "./src/screens/Logout/Logout";
import Ai_chat from "./src/screens/Chat/Chat";

const Stack = createNativeStackNavigator();
export const AppContext = React.createContext();

export default function App() {
  const {
    isGranted: isLocationGranted,
    isLoading: isLocationLoading,
    currRegion: currLocation,
  } = useLocation();
  const [snackBar, setSnackbar] = React.useState({
    isOpen: false,
    message: "",
  });
  const [user, setUser] = React.useState(null);

  const openSnackbar = React.useCallback((message) => {
    setSnackbar({
      isOpen: true,
      message,
    });
  }, []);

  const handleLogin = React.useCallback((user) => {
    setUser(user);
  }, []);

  const handleLogout = React.useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLocationGranted,
        isLocationLoading,
        currLocation,
        openSnackbar,
        handleLogin,
        handleLogout,
        user,
      }}
    >
      <PaperProvider theme={MD3DarkTheme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: "slide_from_right",
              headerShown: false,
            }}
            initialRouteName="Main"
          >
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Hotels" component={Hotels} />
            <Stack.Screen name="Restaurants" component={Restaurants} />
            <Stack.Screen name="Tours" component={Tours} />
            <Stack.Screen name="Chat" component={Ai_chat} />
            <Stack.Screen name="Logout" component={Logout} />
          </Stack.Navigator>
        </NavigationContainer>
        <Snackbar
          visible={snackBar.isOpen}
          duration={3000}
          style={{
            backgroundColor: "#000",
            color: "#fff",
          }}
          onDismiss={() => {
            setSnackbar({
              isOpen: false,
              message: "",
            });
          }}
        >
          <Text style={{ color: "#fff" }}>{snackBar.message}</Text>
        </Snackbar>
      </PaperProvider>
    </AppContext.Provider>
  );
}
AppRegistry.registerComponent("App", () => App);
