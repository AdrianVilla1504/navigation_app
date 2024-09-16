/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line react/react-in-jsx-scope

import './global.css';
import {SplashScreen, Slot} from 'expo-router';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Bold': require('../assets/fonts/WorkSans-Bold.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    'WorkSans-Regular': require('../assets/fonts/WorkSans-Regular.ttf'),
  });
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);
  if (!fontsLoaded && !error) return null;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default RootLayout;
