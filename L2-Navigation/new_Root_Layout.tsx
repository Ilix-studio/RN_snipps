//Navigation System using React Navigation Library - https://reactnavigation.org/
// npm install @react-navigation/native

// It Provide variety of navigators like - Stack, Drawer and Tabs.

// Here : I am using Native Stack Navigation system. We also have Stack Navigator System

// Wrap up with Navigation Conatiner

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
