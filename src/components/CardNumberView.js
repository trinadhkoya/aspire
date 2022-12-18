import {StyleSheet, Text, View} from 'react-native';
import SecureTextView from 'ui-kit/SecureTextView';
import React from 'react';
import Colors from 'utils/colors.utils';
import {CARD_HEIGHT, CARD_WIDTH} from 'utils/constants.utils';
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
  container: {
    backgroundColor: Colors.transparent,
    width: CARD_WIDTH,
    height: CARD_HEIGHT + 32,
    marginTop: -90,
  },
  innerContainer: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    width: 151,
    height: 45,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  iconImage: {
    height: 16,
    width: 16,
    marginRight: 6,
  },
  bullets: {
    height: 8,
    width: 8,
    borderRadius: 8,
    margin: 2,
    backgroundColor: 'white',
  },
  shadow: {
    shadowColor: '#AAA',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 8,
  },
  badge: {
    fontSize: 12,
    fontWeight: '600',
  },
  cardBrand: {
    width: 74,
  },
  modalShape: {
    backgroundColor: 'white',
    width: '100%',
    height: 85,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    marginBottom: 0,
    marginTop: -85,
    marginLeft: -24,
    marginRight: -24,
  },
  actualCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    marginTop: -13,
    padding: 0,
    zIndex: 9999,
  },
  cardBrandView: {
    marginTop: 24,
    height: 21,
    marginRight: 24,
    alignItems: 'flex-end',
  },
  cardHolderName: {
    color: 'white',
    fontWeight: '700',
    fontSize: 22,
  },
  cardProvider: {
    marginBottom: 24,
    marginRight: 24,
    height: 20,
    alignItems: 'flex-end',
  },
  validityView: {
    color: 'white',
    fontWeight: '400',
    fontSize: 15,
    marginRight: 20,
  },
  expiryView: {
    color: 'white',
    fontWeight: '400',
    fontSize: 15,
  },
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
