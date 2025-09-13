import { Stack } from "expo-router";
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			<StackLayout />
		</SafeAreaProvider>
	);
}

function StackLayout() {
	const isAuth = false;

	return (
		<Stack>
			<Stack.Protected guard={isAuth}>
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />
			</Stack.Protected>
			<Stack.Protected guard={!isAuth}>
				<Stack.Screen name="welcome" options={{ headerShown: false }} />
				<Stack.Screen name="sign-up" options={{ headerShown: false }} />
				<Stack.Screen name="sign-in" options={{ headerShown: false }} />
			</Stack.Protected>
		</Stack>
	);
}
