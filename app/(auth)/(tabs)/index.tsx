import { useQuery } from "convex/react";
import { Text, View } from "react-native";
import { api } from "@/convex/_generated/api";

export default function Index() {
	const tasks = useQuery(api.tasks.get);
	console.log(tasks);

	return (
		<View className="flex-1 bg-primary px-4">
			<Text className="text-white">
				domovska obrazovka, souhrny, posledni treninky, nejake statistiky...
				{tasks?.length}
			</Text>
		</View>
	);
}
