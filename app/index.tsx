/* eslint-disable react/react-in-jsx-scope */
import {Redirect} from 'expo-router';
const index = () => {
  return <Redirect href="/home" />;
  /* return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-4xl text-secondary font-work-bold">
          Hola mundo
        </Text>
        <Text className="text-4xl text-primary font-work-medium">
          Hola mundo
        </Text>
        <Text className="text-4xl text-tertiary font-work-light">
          Hola mundo
        </Text>
        <Text className="text-4xl font-work-black">Hola mundo</Text>
        <Text className="text-4xl font-work-regular">Hola mundo</Text>
        <Link href="/products">Productos</Link>
        <Link href="/settings">Settings</Link>
      </View>
    </SafeAreaView>
  ); */
};

export default index;
