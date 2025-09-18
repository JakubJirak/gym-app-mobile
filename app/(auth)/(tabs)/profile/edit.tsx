import {ScrollView, Text, TextInput, View} from "react-native";
import ComponentHeader from "@/components/component-header";

export default function Edit() {
  return (
    <View className="flex-1 bg-black px-5">
      <ComponentHeader text="Upravit profil"/>
      <ScrollView>
        <View className="gap-3 mt-4 mb-3">
          <View className="flex-row gap-6 items-center">
            <View className="w-[70px] h-[70px] rounded-full bg-gray-700"/>
            <View>
              <Text className="text-white text-lg font-bold">Username</Text>
              <Text className="text-gray-400">Powerlifter</Text>
            </View>
          </View>

        </View>
        <View className="gap-3 my-3">
          <Text className="text-white font-bold tracking-wide">Zmenit vahu (kg)</Text>
          <TextInput
            className="border-2 border-gray-800 rounded-2xl caret-white px-4 text-gray-400"
            defaultValue="79.00"
            inputMode="decimal"
          />
        </View>
        <View className="gap-3 my-3">
          <Text className="text-white font-bold tracking-wide">Zmenit zamereni</Text>
          <TextInput
            className="border-2 border-gray-800 rounded-2xl caret-white px-4 text-gray-400"
            defaultValue="powerlifter"
          />
        </View>
        <View className="gap-3 my-3">
          <Text className="text-white font-bold tracking-wide">Zmenit jmeno</Text>
          <TextInput
            className="border-2 border-gray-800 rounded-2xl caret-white px-4 text-gray-400"
            defaultValue="username"
          />
        </View>
        <View className="gap-3 my-2">
          <Text className="text-white font-bold tracking-wide">Zmenit email</Text>
          <TextInput
            className="border-2 border-gray-800 rounded-2xl caret-white px-4 text-gray-400"
            defaultValue="test@test.com"
            inputMode="email"
          />
        </View>
        <View className="gap-3 my-3">
          <Text className="text-white font-bold tracking-wide">Zmenit heslo</Text>
          <TextInput
            className="border-2 border-gray-800 rounded-2xl caret-white px-4 text-gray-400"
            defaultValue="heslo"
            secureTextEntry
          />
        </View>
      </ScrollView>
    </View>
  );
}
