// This file is used to define the layout of the app, including the tab navigation
// and the styles for the tab bar.
// It uses the Expo Router and React Native components to create a custom tab bar
// with icons and labels.

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({focused, icon, title}: any) => {
    if (focused) {
        return ( // if focused, show highlight
            <ImageBackground
            source={images.highlight}
            className="flex-row items-center justify-center w-28 h-16 mt-4 rounded-full overflow-hidden" //this is what gives the pill shape
            >
            <Image
                source={icon}
                tintColor="#151312"
                className="w-5 h-5 mr-2" // this is the icon size
            />
            <Text className="text-black font-semibold">{title}</Text>
            </ImageBackground>
        );
    }
        return ( // else show tinted icon
            <View className="size-full justify-center items-center mt-4 rounded-full">
            <Image
                source={icon}
                className="w-5 h-5"
                tintColor="#A8B5DB"
            />
            </View>
        )
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{ // this modifies the tab bar to show just icons no labels
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarStyle: { // this modifies the tab bar to look more rounded, pill designed
                backgroundColor: '#0f0D23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: 'transparent'
            }
        }}
    >
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
