/* eslint-disable react/react-in-jsx-scope */
import {Ionicons} from '@expo/vector-icons';
import {Tabs} from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: 'green'}}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home Screen',
          tabBarIcon: ({color}) => (
            <Ionicons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({color}) => (
            <Ionicons size={28} name="star" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
