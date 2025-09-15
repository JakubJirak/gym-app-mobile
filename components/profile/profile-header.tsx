import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfileHeader({ text }: { text: string }) {
	const router = useRouter();

	return (
		<View className="flex-row justify-between items-center">
			<TouchableOpacity className="w-8" onPress={() => router.back()}>
				<Ionicons name="arrow-back-outline" size={28} color="white" />
			</TouchableOpacity>
			<Text className="text-white text-xl font-semibold">{text}</Text>
			<View className="w-8" />
		</View>
	);
}
