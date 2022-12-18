import React from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {
  selectCardNumber,
  selectCurrencyUnits,
  selectWeeklySpendingLimit,
  selectWeeklySpendingLimitExhausted,
  setWeeklySpendingLimit,
  setWeeklySpendingLimitExhausted,
} from 'redux/slices/debitCardSlice';
import {
  selectAppColorSolid,
  setIsLoadingIndicatorDisplayed,
  setLoadingIndicatorText,
} from 'redux/slices/appVariablesSlice';
import {selectUserId} from 'redux/slices/userSlice';
import debitCardDetailsAPI from 'services/debitCardDetailsAPI';
import CardView from './CardView';
import Colors from 'utils/colors.utils';
import {
  CARD_HEIGHT,
  DEBIT_CARD_MENU_ITEMS,
  SCREEN_HEIGHT,
  userInfo,
} from 'utils/constants.utils';

const {height} = Dimensions.get('screen');

const renderSpendingLimitBar = (
  renderFlag,
  limitExhausted,
  totalLimit,
  currencyUnits,
  appColorSolid,
) => {
  if (renderFlag === true) {
    return (
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{height: 39, marginLeft: 24, marginRight: 24, marginTop: 24}}>
          <View
            style={{
              marginBottom: 6,
              flexDirection: 'row',
              marginLeft: 0,
              marginRight: 0,
              alignContent: 'space-between',
            }}>
            {/* View for heading and numerical representation of limit*/}
            <Text
              style={{
                color: 'black',
                fontWeight: '400',
                fontSize: 13,
                alignSelf: 'flex-start',
                flex: 1,
              }}>
              Debit card spending limit
            </Text>
            <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
              <Text
                style={{color: appColorSolid, fontWeight: '400', fontSize: 12}}>
                {currencyUnits}
                {limitExhausted}
              </Text>
              <Text
                style={{
                  color: Colors.primaryDarkText,
                  fontWeight: '300',
                  fontSize: 12,
                }}>
                {' '}
                | {currencyUnits}
                {totalLimit}
              </Text>
            </View>
          </View>
          {/*
//TODO need to replace
          <LinearProgress
            color={appColorSolid}
            trackColor={appColorSolid + "10"}
            variant="determinate"
            value={limitExhausted / totalLimit}
            style={{
              height: 15,
              borderRadius: 30,
              marginBottom: 0,
            }}
          />
*/}
        </View>
      </View>
    );
  } else {
    return <View style={{display: 'none'}} />;
  }
};

const renderButton = buttonState => {
  if (buttonState === -1) {
    //No Button Present
    return <View style={{display: 'none'}} />;
  } else if (buttonState === 0) {
    return (
      <View
        style={{
          alignItems: 'flex-end',
          flex: 1,
        }}>
        <Image
          style={{
            width: 34,
            height: 20,
          }}
          source={require('../assets/toggle.png')}
          resizeMode="contain"
        />
      </View>
    );
  } else if (buttonState == 1) {
    return (
      <View
        style={{
          alignItems: 'flex-end',
          flex: 1,
        }}>
        <Image
          style={{
            width: 34,
            height: 20,
          }}
          source={require('../assets/activeToggle.png')}
          resizeMode="contain"
        />
      </View>
    );
  }
};

const createOneButtonAlert = (title, message) =>
  Alert.alert(title, message, [
    {
      text: 'OK',
      onPress: () => {},
    },
  ]);

function MenuItem(props: {item: any}) {
  return (
    <View style={styles.menuItem}>
      <Image
        style={{width: 32}}
        source={props.item.iconAssetUri}
        resizeMode="contain"
      />
      <View style={{flexDirection: 'column', marginLeft: 12}}>
        <Text style={styles.menuTitle}>{props.item.menuTitle}</Text>
        <Text style={styles.menuSubtitle}>{props.item.menuSubtitle}</Text>
      </View>
      {renderButton(props.item.buttonState)}
    </View>
  );
}

const MenuBottomSheet = props => {
  const dispatchEvent = useDispatch();
  const headerSpace = props.headerOccupiedSpace;

  let spendingLimit = 40000;
  let spendingLimitExhausted = false;
  let cardNumber = userInfo.cardNumber;
  let userId = userInfo.id;
  let currencyUnits = userInfo.currencyUnits;
  let isSpendingLimitSet = true;
  let appColorSolid = Colors.primaryColor;

  return (
    <SafeAreaView style={{top: 0, bottom: 0, ...styles.behind}}>
      <FlatList
        style={[styles.innerContainer, {top: headerSpace + 44}]}
        bounces={true}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <CardView userInfo={userInfo} />
            {renderSpendingLimitBar(
              isSpendingLimitSet,
              spendingLimitExhausted,
              spendingLimit,
              currencyUnits,
              appColorSolid,
            )}
          </View>
        }
        data={DEBIT_CARD_MENU_ITEMS}
        renderItem={({item}) => {
          return (
            <View
              style={{backgroundColor: 'white', zIndex: -100, marginTop: -1}}>
              <>
                <TouchableOpacity disabled={!item.itemEnabled}>
                  <MenuItem item={item} />
                </TouchableOpacity>
              </>
            </View>
          );
        }}
        scrollEnabled={true}
      />
    </SafeAreaView>
  );
};

export default MenuBottomSheet;

const styles = StyleSheet.create({
  behind: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: SCREEN_HEIGHT * 0.5,
    backgroundColor: 'transparent',
    width: '100%',
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    height: 41,
    marginTop: 22,
    alignContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
    height: 19,
    fontWeight: '400',
    fontSize: 14,
    alignContent: 'flex-start',
    flex: 1,
    marginBottom: 2,
  },
  menuIcon: {
    width: 32,
    height: 32,
  },
  menuSubtitle: {
    height: 18,
    fontWeight: '300',
    fontSize: 12,
    color: 'rgba(34,34,34,0.4)',
  },
  innerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    width: '100%',
    height: height - 40, //-40 for tab bar
    flex: 1,
  },
});
