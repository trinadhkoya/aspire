import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Tabs from 'routing/Tabs';
import SpendingLimitScreen from 'screens/SpendingLimitScreen';

const DashBoardStack = createNativeStackNavigator();

const NavStack = () => {
  return (
    <DashBoardStack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
      }}>
      <DashBoardStack.Screen name="Tabs" component={Tabs} />
      <DashBoardStack.Screen
        name="SpendingLimit"
        component={SpendingLimitScreen}
      />
    </DashBoardStack.Navigator>
  );
};

export default NavStack;
