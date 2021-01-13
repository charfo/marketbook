import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home/home';
import ListItems from './screens/listitems/listitems';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const options: StackNavigationOptions = {headerShown: false, animationEnabled: true, animationTypeForReplace: 'push'};

const CategoriesStack = createStackNavigator<CategoryStackParamList>();


function HomeTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Mi Compra" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={HomeScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <CategoriesStack.Navigator screenOptions={options} >
        <CategoriesStack.Screen name="Home" component={HomeTabs} />
        <CategoriesStack.Screen name="ListItems" component={ListItems} />
      </CategoriesStack.Navigator>
    </NavigationContainer>

  );
}