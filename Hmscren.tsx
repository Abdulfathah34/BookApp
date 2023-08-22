import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Product from './Product';
import Details from './Details';

const stack = createNativeStackNavigator();
const Hmscren = () => {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="Products" component={Product} />
      <stack.Screen name="Details" component={Details} />
    </stack.Navigator>
  );
};

export default Hmscren;
