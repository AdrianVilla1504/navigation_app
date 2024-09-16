/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {Ionicons} from '@expo/vector-icons';
import {DrawerActions, StackActions} from '@react-navigation/native';
import {Stack, useNavigation} from 'expo-router';
import {Text} from 'react-native';

const StackLayout = () => {
  const navigation = useNavigation();
  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      navigation.dispatch(StackActions.pop());
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: '#f0f0f0',
        },
        headerLeft: ({tintColor, canGoBack}) => (
          <Ionicons
            name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
            size={20}
            className="mr-5"
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
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
