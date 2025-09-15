import { View } from "react-native";
import ProfileLink from "./profile-link";

export default function Links() {
	return (
		<View>
			<ProfileLink
				href="/profile/settings"
				icon="trophy-outline"
				text="Vahy a cile"
			/>
			<View className="bg-gray-800 w-full h-[1px]" />
			<ProfileLink
				href="/profile/exercises"
				icon="barbell-outline"
				text="Vlastni cviky"
			/>
			<View className="bg-gray-800 w-full h-[1px]" />
			<ProfileLink
				href="/profile/edit"
				icon="options-outline"
				text="Upravit profil"
			/>
			<View className="bg-gray-800 w-full h-[1px]" />
			<ProfileLink
				href="/profile/settings"
				icon="settings-outline"
				text="Nastavení"
			/>
			<View className="bg-gray-800 w-full h-[1px]" />
			<ProfileLink
				href="/profile/about"
				icon="information-circle-outline"
				text="O aplikaci"
			/>
		</View>
	);
}
