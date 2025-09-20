import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import ComponentHeader from "@/components/component-header";

export default function TrainingById() {
	const { id } = useLocalSearchParams();

	return (
		<View className="flex-1 bg-primary px-5">
			<ComponentHeader text="Training" />
			<Text className="text-white mt-4">jednotlivy trenink, id: {id}</Text>
		</View>
	);
}
