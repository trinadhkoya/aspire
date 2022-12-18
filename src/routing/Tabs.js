import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {selectAppColorSolid} from 'redux/slices/appVariablesSlice';
import DebitCardScreenContainer from 'screens/DebitCardScreenContainer';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const appColorSolid = useSelector(selectAppColorSolid);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      style={styles.shadow}
      backBehavior="none"
      initialRouteName="Debit Card">
      {/* Assigning all tabs to redirect to DebitControlCenterScreen since it is the only screen shared with us*/}
      <Tab.Screen
        name="Home"
        component={DebitCardScreenContainer}
        listeners={{
          tabPress: e => {
            // Prevent default action since this item is disabled
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/Home.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                }}
              />
              <Text style={{fontSize: 9, color: '#DDDDDD'}}>Home</Text>
              {/* These elements will always be set to gray since they are not supposed to be focused as per the shared SR Doc */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Debit Card"
        component={DebitCardScreenContainer}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/pay.png')}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? appColorSolid : '#DDD',
                }}
              />
              <Text
                style={{fontSize: 9, color: focused ? appColorSolid : '#DDD'}}>
                Debit Card
              </Text>
              {/* These elements will always be set to gray since they are not supposed to be focused as per the shared SR Doc */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
