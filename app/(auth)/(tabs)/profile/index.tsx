import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Links from "@/components/profile/links";

export default function Profile() {
	return (
		<View className="flex-1 bg-black px-5">
			<View className="flex-row items-center gap-6 mb-6 mt-4">
				<View className="w-[100px] h-[100px] rounded-full bg-gray-700" />
				<View className="gap-1">
					<Text className="text-white text-center text-3xl font-semibold tracking-wider">
						Username
					</Text>
					<Text className="text-gray-400 text-xl">Powefliter</Text>
				</View>
			</View>

			<View className="gap-3 mb-8 ml-4">
				<View className="flex-row items-center gap-6">
					<Ionicons name="mail-outline" size={20} color="gray" />
					<Text className="text-gray-400 text-lg tracking-wider">
						test@test.com
					</Text>
				</View>
				<View className="flex-row items-center gap-6">
					<Ionicons name="calendar-outline" size={20} color="gray" />
					<Text className="text-gray-400 text-lg tracking-wider">1.1.2025</Text>
				</View>
				<View className="flex-row items-center gap-6">
					<Ionicons name="body-outline" size={20} color="gray" />
					<Text className="text-gray-400 text-lg tracking-wider">79.00kg</Text>
				</View>
			</View>

			<Links />
		</View>
	);
}
