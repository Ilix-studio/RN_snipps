// Using useNavigation hoook
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// Define your screen names (adjust as needed)
type RootStackParamList = {
  Home: undefined; // No params for Home screen
  About: undefined; // No params for About screen
};

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
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
