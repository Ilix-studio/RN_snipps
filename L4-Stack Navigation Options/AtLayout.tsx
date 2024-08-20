//USing screenOptions to set a default screen appearance
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "@/screens/AboutScreen";
import HomeScreen from "@/screens/HomeScreen";
import { Pressable, Text } from "react-native";

type RootStackParamList = {
  Home: undefined; // No params expected
  About: { name: string }; // Example of a screen expecting a parameter
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#DC5F00" },
          headerTintColor: "#F7F7F7",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Pressable onPress={() => alert("menu is pressed")}>
              <Text style={{ color: "#F7F7F7", fontSize: 16 }}>Menu </Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "#e8e4f3",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
