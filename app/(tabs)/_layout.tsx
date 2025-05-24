import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text } from "react-native";

const TabIcon = ({focused, icon, title}: any) => {

    if (focused) {
        return (
            <ImageBackground
            source={images.highlight}
            className="flex-row items-center justify-center w-28 h-14 mt-4 rounded-full overflow-hidden"
            >
            <Image
                source={icon}
                tintColor="#151312"
                className="w-5 h-5 mr-2"
            />
            <Text className="text-black font-semibold">{title}</Text>
            </ImageBackground>
        );
    }
}

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
                focused={focused}
                icon={icons.home}
                title="Home" 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
                focused={focused}
                icon={icons.search}
                title="Search"
            />
          )
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon 
                    focused={focused}
                    icon={icons.save}
                    title="Saved"
                />
            )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon 
                    focused={focused}
                    icon={icons.person}
                    title="Profile"
                />
            )
        }}
      />
    </Tabs>
  );
};

export default _layout;
