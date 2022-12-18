import {StyleSheet, View} from 'react-native';
import SecureTextView from 'ui-kit/SecureTextView';
import React from 'react';
import PropTypes from 'prop-types';
import {Typeface} from 'utils/typefaces.utils';
import TextView from 'ui-kit/TextView';
import Colors from 'utils/colors.utils';

const CardNumberView = ({shouldDisplayCardDetails, cardNum}) => {
  if (
    typeof shouldDisplayCardDetails !== 'boolean' ||
    typeof cardNum !== 'string'
  ) {
    return <View style={{display: 'none'}} />;
  }

  return (
    <View style={styles.secureDigitsView}>
      {shouldDisplayCardDetails ? (
        <TextView color={Colors.white} h4 h4Style={styles.secureDigits}>
          {cardNum.substring(0, 4)}
        </TextView>
      ) : (
        <SecureTextView size={4} />
      )}
      {shouldDisplayCardDetails ? (
        <TextView color={Colors.white} h4 h4Style={styles.secureDigits}>
          {cardNum.substring(0, 4)}
        </TextView>
      ) : (
        <SecureTextView size={4} />
      )}
      {shouldDisplayCardDetails ? (
        <TextView color={Colors.white} h4 h4Style={styles.secureDigits}>
          {cardNum.substring(0, 4)}
        </TextView>
      ) : (
        <SecureTextView size={4} />
      )}
      <TextView color={Colors.white} h4 h4Style={styles.secureDigits}>
        {cardNum.substring(0, 4)}
      </TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  secureDigits: {
    letterSpacing: 3.5,
    marginRight: 24,
    fontFamily: Typeface.DemiBold,
  },
  secureDigitsView: {
    flexDirection: 'row',
  },
});
CardNumberView.propTypes = {
  shouldDisplayCardDetails: PropTypes.bool,
  cardNum: PropTypes.string,
};
CardNumberView.defaultProps = {
  shouldDisplayCardDetails: false,
  cardNum: '',
};

export default CardNumberView;
