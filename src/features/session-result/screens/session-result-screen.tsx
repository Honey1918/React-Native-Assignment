import { StyleSheet, Text, View } from "react-native";

export function SessionResultScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text>Session Result Screen</Text>
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
