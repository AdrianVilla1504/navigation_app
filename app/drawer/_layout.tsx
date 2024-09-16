/* eslint-disable react/react-in-jsx-scope */

import {Ionicons} from '@expo/vector-icons';
import {Drawer} from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer
        
      screenOptions={{
        overlayColor: 'rgba(0,0,0,0,4)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        sceneContainerStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'Usuario',
          drawerIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Schedule',
          title: 'Horario',
          drawerIcon: ({color, size}) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
