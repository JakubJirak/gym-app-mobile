import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import { cs } from "date-fns/locale";
import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import ComponentHeader from "@/components/component-header";
import Exercise from "@/components/trainings/exercise";
import { COLORS } from "@/constants/COLORS";
import { trainings } from "@/constants/trainings";

export default function TrainingById() {
	const { id } = useLocalSearchParams();

	const training = trainings.find((t) => t.id === id);

	if (training === undefined) return null;

	return (
		<View className="flex-1 bg-primary px-5">
			<ComponentHeader text={training.name} />

			<View className="flex-row items-center mt-2 pb-4">
				<View className="flex-row flex-1 gap-2">
					<Ionicons name="calendar-outline" size={20} color={COLORS.muted} />
					<Text className="text-muted">
						{format(new Date(training.workoutDate), "PPPP", { locale: cs })}
					</Text>
				</View>
				<Text className="text-white bg-secondary rounded-xl px-2 py-1 text-base">
					Cviky: {training.workoutExercises.length}
				</Text>
			</View>
			<FlatList
				data={training.workoutExercises}
				renderItem={({ item }) => (
					<Exercise
						name={item.exercise.name}
						muscleGroup={item.exercise.muscleGroup.muscleGroup}
						sets={item.sets}
					/>
				)}
				keyExtractor={(item) => item.id}
				ItemSeparatorComponent={() => (
					<View className="w-full h-0.5 bg-secondary" />
				)}
			/>
		</View>
	);
}
