import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export function Routes() {

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}