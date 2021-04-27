import * as React from 'react'
import {Text, View} from 'react-native'

import BoyScreen from './BoyScreen'
import GirlScreen from './GirlScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = ()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="BoyScreen" 
        options={{tabBarIcon: () => <text>👱</text>}}
        component={BoyScreen} />
      <Tab.Screen 
        name="GirlScreen"
        options={{tabBarIcon: () => <text>👩</text>}} 
        component={GirlScreen} />
    </Tab.Navigator>
  )
}
export default HomeScreen