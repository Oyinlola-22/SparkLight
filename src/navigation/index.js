import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  House,
  UserCircle,
  MagnifyingGlass,
  CirclesFour,
} from 'phosphor-react-native';

import GetStarted from '../screen/GetStarted';
import Homescreen from '../screen/Homescreen';
import NewsDetail from '../screen/NewsDetail';
import WriteArticle from '../screen/createNews';
import Search from '../screen/Search';
import ProfileScreen from '../screen/Profile';
import Categories from '../screen/Categories';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  const iconMap = {
    Home: House,
    Categories: CirclesFour,
    Profile: UserCircle,
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          const IconComponent = iconMap[route.name];
          return <IconComponent size={size} color={color} />;
        },
        tabBarActiveTintColor: '#c45628',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#055160', // Adjust the background color if needed
        },
      })}>
      <Tab.Screen name="Home" component={Homescreen} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
        <Stack.Screen name="WriteArticle" component={WriteArticle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
