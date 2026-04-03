import { StyleSheet, Text, View } from "react-native";

export function SettingsScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
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
