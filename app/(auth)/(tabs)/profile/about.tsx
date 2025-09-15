import { View } from "react-native";
import ProfileHeader from "@/components/profile/profile-header";

export default function About() {
	return (
		<View className="flex-1 bg-black px-5">
			<ProfileHeader text="O aplikaci" />
		</View>
	);
}
