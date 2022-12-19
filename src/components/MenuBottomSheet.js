import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import CardView from './CardView';
import {
  CARD_HEIGHT,
  DEBIT_CARD_MENU_ITEMS,
  userInfo,
} from 'utils/constants.utils';
import DebitCardMenuItem from 'screens/components/DebitCardMenuItem';
import Colors from 'utils/colors.utils';
import {Metrics} from 'utils/screen.utils';

const MenuBottomSheet = props => {
  //This will help us to place the CardView from Top Space
  const headerOccupiedSpace = props.headerOccupiedSpace;

  const onPressToggle = item => {
    if (item.menuTitle === 'Weekly spending limit') {
      props.navigation.navigate('SpendingLimit');
    }
  };

  // Debit Card MenuItems
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <DebitCardMenuItem
          item={item}
          onToggle={() => onPressToggle(item, index)}
        />
      </TouchableOpacity>
    );
  };

  // This will help us to have some empty space when sheet in the background of th card
  const renderHeader = () => {
    return <View style={[styles.listHeader, {height: sheetCoverHeight}]} />;
  };

  const sheetCoverHeight = CARD_HEIGHT * 0.6;
  const hideCardBadgeHeight = 44;

  return (
    <React.Fragment>
      <CardView userInfo={userInfo} />
      <View
        style={[
          styles.listItemContainer,
          {top: headerOccupiedSpace + sheetCoverHeight + hideCardBadgeHeight},
        ]}>
        <FlatList
          bounces={true}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          data={DEBIT_CARD_MENU_ITEMS}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
          scrollEnabled={true}
        />
      </View>
    </React.Fragment>
  );
};

export default MenuBottomSheet;

const styles = StyleSheet.create({
  listItemContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: -1,
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius,
  },
  listHeader: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
