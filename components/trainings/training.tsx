import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import { cs } from "date-fns/locale";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { COLORS } from "@/constants/COLORS";

interface TrainingProps {
	id: string;
	name: string;
	date: string;
	exercises: number;
}

export default function Training({ id, name, date, exercises }: TrainingProps) {
	return (
		<Link
			href={{
				pathname: "/trainings/[id]",
				params: { id },
			}}
		>
			<View className="py-6 px-2 flex-row">
				<View className="gap-3 flex-1">
					<Text className="text-white text-xl font-semibold">{name}</Text>
					<View className="flex-row gap-2 items-center">
						<Ionicons name="calendar-outline" size={20} color={COLORS.muted} />
						<Text className="text-muted">
							{format(new Date(date), "PPPP", { locale: cs })}
						</Text>
					</View>
				</View>
				<View>
					<Text className="text-white text-sm bg-secondary px-3 py-2 rounded-2xl">
						Cviky: {exercises}
					</Text>
				</View>
			</View>
		</Link>
	);
}
