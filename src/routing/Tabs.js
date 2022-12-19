import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DebitCardScreenContainer from 'screens/DebitCardScreenContainer';
import IMAGES from 'assets';
import TextView from 'ui-kit/TextView';
import {labels} from 'utils/constants.utils';
import Colors from 'utils/colors.utils';
import {FontSize, Typeface} from 'utils/typefaces.utils';
import HomeContainer from 'screens/HomeContainer';

const BottomTabs = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
};

const Tabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={screenOptions}
      backBehavior="none"
      initialRouteName="Home">
      <BottomTabs.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabItem}>
              <Image
                source={IMAGES.home}
                resizeMode="contain"
                style={[
                  styles.image,
                  {
                    tintColor: focused
                      ? Colors.primaryColor
                      : Colors.grey.light,
                  },
                ]}
              />
              <TextView h4 h4Style={focused ? styles.active : styles.inactive}>
                {labels.tabs.home}
              </TextView>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Debit Card"
        component={DebitCardScreenContainer}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabItem}>
              <Image
                source={IMAGES.pay}
                resizeMode="contain"
                style={[
                  styles.image,
                  {
                    tintColor: focused
                      ? Colors.primaryColor
                      : Colors.grey.light,
                  },
                ]}
              />
              <TextView h4 h4Style={focused ? styles.active : styles.inactive}>
                {labels.tabs.debitCard}
              </TextView>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
  },
  active: {
    fontSize: FontSize.extraSmall,
    fontFamily: Typeface.Medium,
    color: Colors.primaryColor,
  },
  inactive: {
    fontSize: FontSize.extraSmall,
    fontFamily: Typeface.Medium,
    color: Colors.grey.dark,
  },
  tabItem: {alignItems: 'center', justifyContent: 'center'},
});
