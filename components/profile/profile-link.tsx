import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import type React from "react";
import { Text, View } from "react-native";

type LinkHref = React.ComponentProps<typeof Link>["href"];
type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

interface ProfileLinkProps {
	href: LinkHref;
	icon: IoniconName;
	text: string;
}

export default function ProfileLink({ href, icon, text }: ProfileLinkProps) {
	return (
		<Link href={href} className="py-6">
			<View className="flex flex-row items-center gap-6">
				<Ionicons name={icon} size={28} color="white" />
				<Text className="text-white text-xl tracking-wider">{text}</Text>
			</View>
		</Link>
	);
}
