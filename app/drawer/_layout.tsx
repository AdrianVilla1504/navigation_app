/* eslint-disable react/react-in-jsx-scope */

import {Drawer} from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Schedule',
          title: 'Horario',
        }}
      />
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'Usuario',
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
