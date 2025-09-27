import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
	return (
		<SafeAreaView className="bg-primary px-4">
			<View className="flex-1 bg-primary">
				<Text className="text-white">signin</Text>
			</View>
		</SafeAreaView>
	);
}
