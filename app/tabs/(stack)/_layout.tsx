/* eslint-disable react/react-in-jsx-scope */
import {Stack} from 'expo-router';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: '#f0f0f0',
        },
      }}>
      <Stack.Screen
        name="home/index"
        options={{
          title: 'Home Screen',
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Productos Screen',
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: 'Profile Screen',
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: 'Settings',
        }}
      />
    </Stack>
  );
};

export default StackLayout;
