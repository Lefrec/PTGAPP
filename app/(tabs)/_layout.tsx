import { Tabs } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function RootLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
            headerStyle: {
                backgroundColor: '#721911',
            },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: {
                backgroundColor: '#25292e',
            },
    }}
>
      <Tabs.Screen name="index"
      options={{
        title: 'Roster',
        tabBarIcon: ({color}) => (
            <FontAwesome6 name="book-skull" size={24} color={color}/>
        )
      }}/>
      <Tabs.Screen name="tome"
      options={{
        title: 'Tome',
        tabBarIcon: ({color}) => (
            <FontAwesome6 name="book-open" size={24} color={color} />
        )
      }}/>
      <Tabs.Screen name="settings"
      options={{
        title: 'Settings',
        tabBarIcon: ({color}) => (
            <FontAwesome6 name="gear" size={24} color={color} />
        )
      }}/>
    </Tabs>
  )
}