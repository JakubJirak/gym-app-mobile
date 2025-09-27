import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TextInput, View } from "react-native";
import ComponentHeader from "@/components/component-header";
import { COLORS } from "@/constants/COLORS";

export default function Edit() {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: COLORS.primary,
				paddingHorizontal: 16,
			}}
		>
			<ComponentHeader text="Upravit profil" />
			<View className="gap-3 mt-8 mb-3">
				<View className="gap-4 items-center">
					<View>
						<View className="w-[110px] h-[110px] rounded-full bg-gray-700 relative" />
						<View className="absolute bottom-0 right-0 bg-accent size-10 items-center justify-center rounded-full">
							<Ionicons name="pencil" size={20} color="white" />
						</View>
					</View>

					<View className="gap-1">
						<Text className="text-white text-3xl font-bold text-center">
							Username
						</Text>
						<Text className="text-muted text-lg text-center">Powerlifter</Text>
					</View>
				</View>
			</View>
			<View className="gap-2 my-3">
				<Text className="text-white font-semibold tracking-wide text-lg">
					Váha
				</Text>
				<TextInput
					className="bg-secondary rounded-2xl caret-white p-4 text-white text-lg"
					defaultValue="79.00"
					inputMode="decimal"
				/>
			</View>
			<View className="gap-2 my-3">
				<Text className="text-white font-semibold tracking-wide text-lg">
					Jméno
				</Text>
				<TextInput
					className="bg-secondary rounded-2xl caret-white p-4 text-white text-lg"
					defaultValue="username"
				/>
			</View>
			<View className="gap-2 my-3">
				<Text className="text-white font-semibold tracking-wide text-lg">
					Zaměření
				</Text>
				<TextInput
					className="bg-secondary rounded-2xl caret-white p-4 text-white text-lg"
					defaultValue="powerlifter"
				/>
			</View>

			{/*<View className="gap-2 my-3 pb-4">
				<Text className="text-white font-semibold tracking-wide text-lg">
					Email
				</Text>
				<TextInput
					className="bg-secondary rounded-2xl caret-white p-4 text-white text-lg"
					defaultValue="test@test.com"
					inputMode="email"
				/>
			</View>*/}
		</ScrollView>
	);
}
