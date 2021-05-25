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
        options={{tabBarIcon: () => <Text>👱</Text>}}
        component={BoyScreen} />
      <Tab.Screen 
        name="GirlScreen"
        options={{tabBarIcon: () => <Text>👩</Text>}}
        component={GirlScreen} />
    </Tab.Navigator>
  )
}
export default HomeScreen