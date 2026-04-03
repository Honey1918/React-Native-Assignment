import { StyleSheet, Text, View } from "react-native";

export function WelcomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text>Welcome Screen</Text>
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
