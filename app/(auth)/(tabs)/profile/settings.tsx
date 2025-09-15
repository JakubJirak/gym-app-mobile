import { View } from "react-native";
import ComponentHeader from "@/components/component-header";

export default function Settings() {
	return (
		<View className="flex-1 bg-black px-5">
			<ComponentHeader text="Nastavení" />
		</View>
	);
}
