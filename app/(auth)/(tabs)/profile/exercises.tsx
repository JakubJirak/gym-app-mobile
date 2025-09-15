import { View } from "react-native";
import ProfileHeader from "@/components/profile/profile-header";

export default function Exercises() {
	return (
		<View className="flex-1 bg-black px-5">
			<ProfileHeader text="Vlastni cviky" />
		</View>
	);
}
