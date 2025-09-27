import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ComponentHeader({ text }: { text: string }) {
	const router = useRouter();

	return (
		<View className="flex-row justify-between items-center pb-2">
			<TouchableOpacity className="w-8" onPress={() => router.back()}>
				<Ionicons name="arrow-back-outline" size={28} color="white" />
			</TouchableOpacity>
			<Text className="text-white text-xl font-semibold flex-1 text-center">
				{text}
			</Text>
			<View className="w-8" />
		</View>
	);
}
