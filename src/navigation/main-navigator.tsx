import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "@/features/home/screens/home-screen";
import { SettingsScreen } from "@/features/settings/screens/settings-screen";
import { MainTabParamList } from "./types";
import { Text, View } from "react-native";
import { SessionResultScreen } from "@/features/session-result/screens/session-result-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./types";

// Since Home tab needs to navigate to SessionResult without losing the tab bar (or losing the tab bar depending on design, but usually within Home Stack)
// Let's create a Home Stack inside the Tab.
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="SessionResult" component={SessionResultScreen} />
        </HomeStack.Navigator>
    );
}

// Dummy Store Screen for the placeholder
function StoreScreen() {
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>Store Screen</Text></View>;
}

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ title: 'Home' }} />
            <Tab.Screen name="Store" component={StoreScreen} options={{ title: 'Store' }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        </Tab.Navigator>
    );
}
