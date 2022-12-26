import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { ServiceListScreen } from "./screens/ServiceListScreen";
import { ServiceScreen } from "./screens/ServiceScreen";
import { BasketScreen } from "./screens/BasketScreen/BasketScreen";
import { store } from "./store";
import React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ServiceList" component={ServiceListScreen} />
          <Stack.Screen name="Service" component={ServiceScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
