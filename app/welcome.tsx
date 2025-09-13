import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
	return (
		<SafeAreaView className="flex-1 bg-black">
			<View className="flex-1 bg-black">
				<Text className="text-white">welcome</Text>
				<Link className="text-white" href="/sign-up">
					Sign Up
				</Link>
				<Link className="text-white" href="/sign-in">
					Sign In
				</Link>
			</View>
		</SafeAreaView>
	);
}
