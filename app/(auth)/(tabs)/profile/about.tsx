import { View } from "react-native";
import ComponentHeader from "@/components/component-header";

export default function About() {
	return (
		<View className="flex-1 bg-black px-5">
			<ComponentHeader text="O aplikaci" />
		</View>
	);
}
