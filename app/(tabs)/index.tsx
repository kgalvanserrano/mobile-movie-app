// This file is the entry point for the app. It is used to set up the app's navigation and layout.
// It is also used to set up the app's theme and other global settings.
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, View, } from "react-native";

export default function Index() {
const router = useRouter(); // if something starts with 'use' it usually means it's a hook, called at the top of the component, allows us to use through different screens progrmatically

  return (
    <View className="flex-1 bg-primary"> 

      <Image source={images.bg} className="absolute w-full z-0"/> 

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}> 
        
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>

        <View className="flex-1 mt-5">

          <SearchBar 
            onPress={() => router.push('/search')}
            placeholder='Search for a movie'
          />

        </View>

      </ScrollView>

    </View>
  );
}