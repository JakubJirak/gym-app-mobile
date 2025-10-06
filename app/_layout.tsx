import { Stack } from "expo-router";
import "../global.css";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { ConvexReactClient } from "convex/react";
import { PaperProvider } from "react-native-paper";
//import { StrictMode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { COLORS } from "@/constants/COLORS";
import { authClient } from "@/lib/auth-client";

const convex = new ConvexReactClient(
	process.env.EXPO_PUBLIC_CONVEX_URL as string,
	{
		expectAuth: true,
		unsavedChangesWarning: false,
	},
);

export default function RootLayout() {
	return (
		//<StrictMode>
		<ConvexBetterAuthProvider client={convex} authClient={authClient}>
			<PaperProvider>
				<SafeAreaProvider>
					<StackLayout />
				</SafeAreaProvider>
			</PaperProvider>
		</ConvexBetterAuthProvider>
		//</StrictMode>
	);
}

function StackLayout() {
	const isAuth = true;

	return (
		<Stack
			screenOptions={{
				contentStyle: { backgroundColor: COLORS.primary },
			}}
		>
			<Stack.Protected guard={isAuth}>
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />
			</Stack.Protected>
			<Stack.Protected guard={!isAuth}>
				<Stack.Screen name="index" />
				<Stack.Screen name="sign-in" />
				<Stack.Screen name="sign-up" />
			</Stack.Protected>
		</Stack>
	);
}
