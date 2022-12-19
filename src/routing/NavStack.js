import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Tabs from "routing/Tabs";
import SpendingLimitContainer from "screens/SpendingLimitContainer";

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
        component={SpendingLimitContainer}
      />
    </DashBoardStack.Navigator>
  );
};

export default NavStack;
