import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DebitCardScreenContainer from 'screens/DebitCardScreenContainer';
import IMAGES from 'assets';
import TextElement from 'ui-kit/TextElement';
import {labels} from 'utils/constants.utils';
import Colors from 'utils/colors.utils';
import {font, fontSize} from 'utils/typefaces.utils';

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
      initialRouteName="Debit Card">
      <BottomTabs.Screen
        name="Home"
        component={DebitCardScreenContainer}
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
              <TextElement
                h4
                h4Style={focused ? styles.active : styles.inactive}>
                {labels.tabs.home}
              </TextElement>
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
              <TextElement
                h4
                h4Style={focused ? styles.active : styles.inactive}>
                {labels.tabs.debitCard}
              </TextElement>
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
    fontSize: fontSize.extraSmall,
    fontFamily: font.Medium,
    color: Colors.primaryColor,
  },
  inactive: {
    fontSize: fontSize.extraSmall,
    fontFamily: font.Medium,
    color: Colors.grey.dark,
  },
  tabItem: {alignItems: 'center', justifyContent: 'center'},
});
