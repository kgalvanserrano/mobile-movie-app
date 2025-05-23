// This file is the entry point for the app. It is used to set up the app's navigation and layout.
// It is also used to set up the app's theme and other global settings.
// It is not recommended to modify this file unless you know what you are doing.
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl text-dark-200 font-bold">Welcome!</Text>
    </View>
  );
}
