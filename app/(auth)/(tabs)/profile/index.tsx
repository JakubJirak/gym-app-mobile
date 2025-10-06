import { Ionicons } from "@expo/vector-icons";
import { Weight } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";
import Links from "@/components/profile/links";
import ProfileHeader from "@/components/profile/profile-header";
import { COLORS } from "@/constants/COLORS";

export default function Profile() {
	return (
		<View className="flex-1 bg-primary px-4">
			<ProfileHeader text="Username" />
			<ScrollView>
				<View className="flex-row items-center gap-6 mb-6 mt-2">
					<View className="w-[90px] h-[90px] rounded-full bg-gray-700" />
					<View className="gap-1">
						<Text className="text-white text-center text-3xl font-semibold">
							Username
						</Text>
						<Text className="text-muted text-xl">Powerlifter</Text>
					</View>
				</View>

				<View className="gap-5.5 flex-row">
					<View className="items-center bg-secondary gap-2 w-[47%] p-3 rounded-xl">
						<View className="flex-row items-center gap-2">
							<Ionicons
								name="calendar-clear-outline"
								size={20}
								color={COLORS.muted}
							/>
							<Text className="text-muted text-lg">Tréninky</Text>
						</View>
						<Text className="text-white text-lg tracking-wider">35</Text>
					</View>

					<View className="items-center bg-secondary gap-2 w-[47%] p-3 rounded-xl">
						<View className="flex-row items-center gap-2">
							<Weight size={20} color={COLORS.muted} />
							<Text className="text-muted text-lg">Váha</Text>
						</View>
						<Text className="text-white text-lg tracking-wider">79.00kg</Text>
					</View>
				</View>

				<View className="w-full h-0.5 bg-secondary my-8" />

				<Links />
			</ScrollView>
		</View>
	);
}
