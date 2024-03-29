import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Tabs from 'routing/Tabs';
import SpendingLimitContainer from 'screens/debitcard/SpendingLimitContainer';

const DashBoardStack = createNativeStackNavigator();

const Router = () => {
  return (
    <DashBoardStack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
      }}>
      <DashBoardStack.Screen name="Tabs" component={Tabs} />
      <DashBoardStack.Screen
        name="SpendingLimit"
        component={SpendingLimitContainer}
      />
    </DashBoardStack.Navigator>
  );
};

export default Router;
