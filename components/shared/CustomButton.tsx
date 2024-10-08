/* eslint-disable react/display-name */
import {Text, Pressable, PressableProps} from 'react-native';
import React from 'react';
import {View} from 'react-native-reanimated/lib/typescript/Animated';

interface Props extends PressableProps {
  children: string;
  color: 'primary' | 'secondary' | 'tertiary';
  variant?: 'contained' | 'text-only';
}

export const CustomButton = React.forwardRef(
  (
    {
      children,
      color = 'primary',
      onPress,
      onLongPress,
      variant = 'contained',
    }: Props,
    ref: React.Ref<View>,
  ) => {
    const btnColor = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
    }[color];

    const textColor = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
    }[color];

    if (variant === 'text-only') {
      return (
        <Pressable
          className={'p-3'}
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}>
          <Text className="text-center">{children}</Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        className={`p-3 rounded-md ${btnColor} active:opacity-90`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}>
        <Text className={`text-center ${textColor} font-work-medium`}>
          {children}
        </Text>
      </Pressable>
    );
  },
);
