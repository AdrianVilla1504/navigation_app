import {View, SafeAreaView} from 'react-native';
import React from 'react';
import { router, useNavigation} from 'expo-router';
import {CustomButton} from '@/components/shared/CustomButton';
import {DrawerActions} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <SafeAreaView>
      <View className="px-10 mt-[25%] gap-y-1">
        {/* <Link href="/products" asChild>
          <CustomButton color="primary">Productos</CustomButton>
        </Link> */}
        <CustomButton
          className="mb-[20%]"
          color="primary"
          onPress={() => router.push('/')}>
          Home
        </CustomButton>
        <CustomButton
          className="mt-2"
          color="secondary"
          onPress={() => router.push('/profile')}>
          Profile
        </CustomButton>
        <CustomButton
          className="mb-[20%]"
          color="tertiary"
          onPress={() => router.push('/products')}>
          Productos
        </CustomButton>
        <CustomButton
          className="mb-2"
          color="secondary"
          variant="text-only"
          onPress={() => router.push('/settings')}>
          settings
        </CustomButton>
        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={onToggleDrawer}>
          Abrir menú
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
