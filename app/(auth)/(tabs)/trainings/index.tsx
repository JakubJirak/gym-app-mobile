import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Trainings() {
	return (
		<View className="flex-1 bg-black">
			<Text className="text-white">zobrazeni vsech treninku</Text>
			<Link
				href={{
					pathname: "/trainings/[id]",
					params: { id: "1" },
				}}
			>
				<Text className="text-white text-xl mt-4">odkaz na trenink</Text>
			</Link>
		</View>
	);
}
