import {StyleSheet, View} from 'react-native';
import Colors from 'utils/colors.utils';
import TextElement from 'ui-kit/TextElement';
import React from 'react';
import PropTypes from 'prop-types';
import {font, fontSize} from 'utils/typefaces.utils';

function PriceBadge({currency, availableBalance}) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TextElement h2 h2Style={styles.currencyFormat}>
          {currency}
        </TextElement>
      </View>
      <TextElement h2>{availableBalance}</TextElement>
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
    fontFamily: font.Bold,
    fontSize: fontSize.small,
    alignSelf: 'center',
  },
});

export default PriceBadge;
