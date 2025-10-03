import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import Links from "@/components/profile/links";
import ProfileHeader from "@/components/profile/profile-header";

export default function Profile() {
	return (
		<View className="flex-1 bg-primary px-4">
			<ProfileHeader text="Username" />
			<ScrollView>
				<View className="flex-row items-center gap-6 mb-8 mt-2">
					<View className="w-[90px] h-[90px] rounded-full bg-gray-700" />
					<View className="gap-1">
						<Text className="text-white text-center text-3xl font-semibold tracking-wider">
							Username
						</Text>
						<Text className="text-muted text-xl">Powerlifter</Text>
					</View>
				</View>

				<View className="gap-3 mb-10 ml-4">
					<View className="flex-row items-center gap-6">
						<Ionicons name="mail-outline" size={20} color="gray" />
						<Text className="text-muted text-lg tracking-wider">
							test@test.com
						</Text>
					</View>
					<View className="flex-row items-center gap-6">
						<Ionicons name="calendar-outline" size={20} color="gray" />
						<Text className="text-muted  text-lg tracking-wider">1.1.2025</Text>
					</View>
					<View className="flex-row items-center gap-6">
						<Ionicons name="body-outline" size={20} color="gray" />
						<Text className="text-muted text-lg tracking-wider">79.00kg</Text>
					</View>
				</View>

				<Links />
			</ScrollView>
		</View>
	);
}
