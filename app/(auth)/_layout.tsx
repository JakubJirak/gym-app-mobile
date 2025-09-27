import { Stack } from "expo-router";
import { COLORS } from "@/constants/COLORS";

export default function AuthLayout() {
	return (
		<Stack
			screenOptions={{
				contentStyle: {
					backgroundColor: COLORS.primary,
				},
			}}
		>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
}
