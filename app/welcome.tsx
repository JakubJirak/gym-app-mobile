import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
	return (
		<SafeAreaView className="flex-1 bg-black">
			<View className="flex-1 bg-black">
				<Text className="text-white text-5xl font-bold text-center mt-36">
					welcome
				</Text>
				<View className="mt-auto mb-16 justify-center items-center gap-10">
					<Link className="text-white text-xl" href="/sign-up">
						Sign Up
					</Link>
					<Link className="text-white text-xl" href="/sign-in">
						Sign In
					</Link>
				</View>
			</View>
		</SafeAreaView>
	);
}
