import { StyleSheet, Text, View } from "react-native";

export function SplashScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
