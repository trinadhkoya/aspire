import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import CardView from './CardView';
import {
  CARD_HEIGHT,
  DEBIT_CARD_MENU_ITEMS,
  labels,
} from 'utils/constants.utils';
import DebitCardMenuItem from 'screens/components/DebitCardMenuItem';
import Colors from 'utils/colors.utils';
import {Metrics} from 'utils/screen.utils';
import PropTypes from 'prop-types';
import TextView from 'ui-kit/TextView';

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
    if (index === 0) {
      //I treated as 0 position as Debit card Spend Limit Widget
      return (
        <View style={styles.spendLimit}>
          <TextView color={Colors.black}>
            {labels.debitCardSpendingLimit}
          </TextView>
          <TextView h3 color={Colors.primaryColor}>
            {`${props?.userInfo?.currencySymbol}${props?.userInfo?.weeklySpendingLimit}`}
          </TextView>
        </View>
      );
    }
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
      <CardView userInfo={props?.userInfo} />
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
MenuBottomSheet.propTypes = {
  userInfo: PropTypes.object,
};
MenuBottomSheet.defaultProps = {
  userInfo: {},
};
export default MenuBottomSheet;

const styles = StyleSheet.create({
  listItemContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: -1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: Metrics.borderRadius,
    borderTopRightRadius: Metrics.borderRadius,
    flex: 1,
    bottom: 0,
  },
  listHeader: {
    backgroundColor: Colors.transparent,
    zIndex: 1,
  },
  spendLimit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingVertical: 20,
  },
});
