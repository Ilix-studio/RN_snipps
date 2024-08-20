// Render the name value in About Screen, by using route parameter object, that can be pass on inside navigate method  as a 2nd parameter.

import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// Define your screen names (adjust as needed)
type RootStackParamList = {
  Home: undefined; // No params for Home screen
  About: { name: string }; // Now About screen expects a 'name' parameter
};

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate("About", {
            name: "ilix",
          })
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
