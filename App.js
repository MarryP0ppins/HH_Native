import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert } from "react-native";
import { Provider } from "react-redux";
import { ServiceListScreen } from "./screens/ServiceListScreen";
import { ServiceScreen } from "./screens/ServiceScreen";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ServiceList" component={ServiceListScreen} />
          <Stack.Screen name="Service" component={ServiceScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}