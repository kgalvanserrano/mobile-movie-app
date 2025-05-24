import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text } from 'react-native'

const _layout = () => {
  return (
    <Tabs> 
        <Tabs.Screen
        name="index"
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <>
  <ImageBackground
  source={images.highlight}
  className="flex-row items-center justify-center w-28 h-14 mt-4 rounded-full overflow-hidden"
>
  <Image source={icons.home} tintColor="#151312" className="w-5 h-5 mr-2" />
  <Text className="text-black font-semibold">Home</Text>
</ImageBackground>
                </>
            )
        }}
        />
        <Tabs.Screen
        name="saved"
        options={{
            title: 'Saved',
            headerShown: false,
        }}
        />
        <Tabs.Screen
        name="search"
        options={{
            title: 'Search',
            headerShown: false,
        }}
        />
                <Tabs.Screen
        name="profile"
        options={{
            title: 'Profile',
            headerShown: false,
        }}
        />
    </Tabs>
  )
}

export default _layout