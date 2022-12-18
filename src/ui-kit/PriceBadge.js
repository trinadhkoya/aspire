import {StyleSheet, View} from 'react-native';
import Colors from 'utils/colors.utils';
import TextView from 'ui-kit/TextView';
import React from 'react';
import PropTypes from 'prop-types';
import {FontSize, Typeface} from 'utils/typefaces.utils';

function PriceBadge({currency, availableBalance}) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TextView h2 color={Colors.white} h2Style={styles.currencyFormat}>
          {currency}
        </TextView>
      </View>
      <TextView color={Colors.white} h2>
        {availableBalance}
      </TextView>
    </View>
  );
}

PriceBadge.defaultProps = {
  currency: PropTypes.string.isRequired,
  availableBalance: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inner: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  currencyFormat: {
    color: Colors.white,
    fontFamily: Typeface.Bold,
    fontSize: FontSize.small,
    alignSelf: 'center',
  },
});

export default PriceBadge;
