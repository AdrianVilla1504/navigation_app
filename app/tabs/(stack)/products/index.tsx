import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {products} from '@/store/products.store';
import {Link} from 'expo-router';
const ProductsScreen = () => {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View className="mt-10 mx-10">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text>{item.description}</Text>
            <Text className="font-work-black">{item.price}</Text>
            <Link
              href={`/tabs/(stack)/products/${item.id}`}
              className="text-primary">
              Ver Detalles
            </Link>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
