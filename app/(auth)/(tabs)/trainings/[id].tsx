import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function TrainingById() {
	const { id } = useLocalSearchParams();

	return (
		<View className="flex-1 bg-black">
			<Text className="text-white">jednotlivy trenink, id: {id}</Text>
		</View>
	);
}
