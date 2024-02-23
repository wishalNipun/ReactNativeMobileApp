import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './src/components/screens/Home';
import MyCart from './src/components/screens/MyCart';
import ProductInfo from './src/components/screens/ProductInfo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function App(): React.JSX.Element {
 
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
