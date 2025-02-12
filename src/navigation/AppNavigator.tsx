import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import AIScreen from '../screens/AIScreen';
import ProfileScreen from '../screens/ProfileScreen';

type TabParamList = {
  Home: undefined;
  AI: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons: Record<string, string> = {
            Home: focused ? 'home' : 'home-outline',
            AI: focused ? 'chatbubble' : 'chatbubble-outline',
            Profile: focused ? 'person' : 'person-outline',
          };
          return <Ionicons name={icons[route.name] as keyof typeof Ionicons.glyphMap} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AI" component={AIScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
