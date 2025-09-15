import { Stack } from "expo-router";
import "../global.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const convex = new ConvexReactClient(
	process.env.EXPO_PUBLIC_CONVEX_URL as string,
	{
		unsavedChangesWarning: false,
	},
);

export default function RootLayout() {
	return (
		<ConvexProvider client={convex}>
			<SafeAreaProvider>
				<StackLayout />
			</SafeAreaProvider>
		</ConvexProvider>
	);
}

function StackLayout() {
	const isAuth = true;

	return (
		<Stack
			screenOptions={{
				contentStyle: {
					backgroundColor: "#000", // Nebo "black"
				},
			}}
		>
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
