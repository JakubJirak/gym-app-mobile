import { Stack } from "expo-router";
import { COLORS } from "@/constants/COLORS";

export default function TrainingsLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: COLORS.primary,
				},
			}}
		/>
	);
}
