/* eslint-disable react/react-in-jsx-scope */
import {View, Text} from 'react-native';
import {useLocalSearchParams, Redirect} from 'expo-router';
import {products} from '@/store/products.store';
const ProductScreen = () => {
  const params = useLocalSearchParams();
  const product = products.find(p => p.id == params.id);
  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="mt-10 mx-10">
      <Text className="text-2xl font-work-black">{product.title}</Text>
      <Text>{product.description}</Text>
      <Text className="font-work-black">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
