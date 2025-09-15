import { View } from "react-native";
import ProfileHeader from "@/components/profile/profile-header";

export default function Edit() {
	return (
		<View className="flex-1 bg-black px-5">
			<ProfileHeader text="Upravit profil" />
		</View>
	);
}
