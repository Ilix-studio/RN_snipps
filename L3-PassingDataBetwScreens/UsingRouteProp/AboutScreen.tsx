// To access the name value from Home Screen. Define the type of the name that about screen going to except.
// as name : string
import { StyleSheet, Text, View, Button } from "react-native";
import {
  useNavigation,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
// Define your screen names (adjust as needed)
type RootStackParamList = {
  Home: undefined; // No params for Home screen
  About: { name: string }; // About screen expects a 'name' parameter
};
// Define the props for AboutScreen
type AboutScreenProps = {
  route: RouteProp<RootStackParamList, "About">; // Type for the route prop
};
const AboutScreen = ({ route }: AboutScreenProps) => {
  const { name } = route.params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button
        title="Go to home page"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default AboutScreen;

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
