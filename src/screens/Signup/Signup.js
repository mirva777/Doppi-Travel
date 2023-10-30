import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const Stack = createNativeStackNavigator();

const Signup = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="step-1" component={StepOne} />
      <Stack.Screen name="step-2" component={StepTwo} />
    </Stack.Navigator>
  );
};

export default Signup;
