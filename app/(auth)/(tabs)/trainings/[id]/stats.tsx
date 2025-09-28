import { useContext } from "react";
import { Text, View } from "react-native";
import { TrainingIdContext } from "./_layout";

export default function Stats() {
	const id = useContext(TrainingIdContext);

	return (
		<View className="bg-primary flex-1 pt-2">
			<Text className="text-white">{id}</Text>
		</View>
	);
}
