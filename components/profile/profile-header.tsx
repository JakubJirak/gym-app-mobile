import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfileHeader({ text }: { text: string }) {
	return (
		<View className="flex-row items-center mt-2 pb-4 pr-2">
			<View className="w-8">
				<Ionicons name="person-outline" size={20} color="white" />
			</View>
			<Text className="text-white text-2xl ml-4 font-semibold flex-1">
				{text}
			</Text>
			<TouchableOpacity className="w-8">
				<Ionicons name="menu" size={24} color="white" />
			</TouchableOpacity>
		</View>
	);
}
