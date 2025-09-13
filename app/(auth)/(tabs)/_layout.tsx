import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabsLayout() {
	return (
		<>
			<SafeAreaView className="bg-black" />
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarActiveTintColor: "white",
					tabBarShowLabel: false,
					tabBarStyle: {
						backgroundColor: "black",
						borderTopColor: "#292929",
						borderTopWidth: 1,
						shadowColor: "transparent",
						height: 70,
						paddingTop: 5,
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						tabBarIcon: ({ color, size, focused }) => (
							<Ionicons
								name={focused ? "home" : "home-outline"}
								size={size}
								color={color}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="trainings"
					options={{
						tabBarIcon: ({ color, size, focused }) => (
							<Ionicons
								name={focused ? "list" : "list-outline"}
								size={size}
								color={color}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="add-training"
					options={{
						tabBarIcon: ({ color, size, focused }) => (
							<Ionicons
								name={focused ? "add-circle" : "add-circle-outline"}
								size={size}
								color={color}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="stats"
					options={{
						tabBarIcon: ({ color, size, focused }) => (
							<Ionicons
								name={focused ? "stats-chart" : "stats-chart-outline"}
								size={size}
								color={color}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						tabBarIcon: ({ color, size, focused }) => (
							<Ionicons
								name={focused ? "person" : "person-outline"}
								size={size}
								color={color}
							/>
						),
					}}
				/>
			</Tabs>
		</>
	);
}
