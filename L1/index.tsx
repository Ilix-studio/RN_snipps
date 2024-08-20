import Greet from "@/components/Greet";
import { StatusBar } from "react-native";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="#DC5F00" barStyle="light-content" />
        <Greet name="ilix" />
        <View style={[styles.box, styles.lightBlueBG]}>
          <Text>LightBlue Box</Text>
        </View>
        <View style={[styles.box, styles.lightRedBG]}>
          <Text>LightRed Box</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  lightBlueBG: {
    backgroundColor: "#7FB5FF",
  },
  lightRedBG: {
    backgroundColor: "#F24A72",
  },
});
