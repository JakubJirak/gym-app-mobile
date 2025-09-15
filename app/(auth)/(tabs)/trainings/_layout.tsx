import { Stack } from "expo-router";

export default function TrainingsLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: "#000", // Nebo "black"
				},
			}}
		/>
	);
}
