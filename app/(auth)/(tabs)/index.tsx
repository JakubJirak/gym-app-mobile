import { useQuery } from "convex/react";
import { Text, View } from "react-native";
import { api } from "@/convex/_generated/api";

export default function Index() {
	const tasks = useQuery(api.tasks.get);
	console.log(tasks);

	return (
		<View className="flex-1 bg-black">
			<Text className="text-white">
				Edit app/index.tsx to edit this screen.
			</Text>
		</View>
	);
}
