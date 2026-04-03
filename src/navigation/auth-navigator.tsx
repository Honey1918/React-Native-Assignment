import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "@/features/auth/screens/welcome-screen";
import { LoginScreen } from "@/features/auth/screens/login-screen";
import { AuthStackParamList } from "./types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}
