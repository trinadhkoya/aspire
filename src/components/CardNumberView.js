import {StyleSheet, Text, View} from 'react-native';
import SecureTextView from 'ui-kit/SecureTextView';
import React from 'react';
import PropTypes from 'prop-types';
import {font as Font, fontSize} from 'utils/typefaces.utils';
import TextElement from 'ui-kit/TextElement';

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
        <Text style={styles.secureDigits}>{cardNum.substring(0, 4)}</Text>
      ) : (
        <SecureTextView size={4} />
      )}
      {shouldDisplayCardDetails ? (
        <Text style={styles.secureDigits}>{cardNum.substring(0, 4)}</Text>
      ) : (
        <SecureTextView size={4} />
      )}
      {shouldDisplayCardDetails ? (
        <Text style={styles.secureDigits}>{cardNum.substring(0, 4)}</Text>
      ) : (
        <SecureTextView size={4} />
      )}
      <TextElement h3 h3Style={styles.secureDigits}>
        {cardNum.substring(0, 4)}
      </TextElement>
    </View>
  );
};

const styles = StyleSheet.create({
  secureDigits: {
    color: 'white',
    fontSize: fontSize.regular,
    letterSpacing: 3.5,
    fontFamily: Font.DemiBold,
    marginRight: 24,
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
