import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "@/features/auth/screens/splash-screen";
import { AuthNavigator } from "./auth-navigator";
import { MainNavigator } from "./main-navigator";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Auth" component={AuthNavigator} />
            <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
    );
}
