import {StyleSheet, Text, View} from 'react-native';
import SecureTextView from 'ui-kit/SecureTextView';
import React from 'react';
import Colors from 'utils/colors.utils';
import {CARD_HEIGHT, CARD_WIDTH} from 'utils/constants.utils';
import PropTypes from 'prop-types';

const CardNumberView = ({cardDisplayFlag, cardNumber}) => {
  if (!(cardDisplayFlag != null && cardNumber != null)) {
    return <View style={{display: 'none'}} />;
  }

  return (
    <View style={styles.secureDigitsView}>
      {cardDisplayFlag ? (
        <Text style={styles.secureDigits}>{cardNumber.substring(0, 4)}</Text>
      ) : (
        <SecureTextView size={4} />
      )}
      {cardDisplayFlag ? (
        <Text style={styles.secureDigits}>{cardNumber.substring(0, 4)}</Text>
      ) : (
        <SecureTextView size={4} />
      )}
      {cardDisplayFlag ? (
        <Text style={styles.secureDigits}>{cardNumber.substring(0, 4)}</Text>
      ) : (
        <SecureTextView size={4} />
      )}
      <Text style={styles.secureDigits}>{cardNumber.substring(0, 4)}</Text>
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
    fontWeight: '500',
    fontSize: 16,
    width: 50,
    letterSpacing: 2,
  },
  secureDigitsView: {
    flexDirection: 'row',
    marginRight: 20,
  },
});
CardNumberView.propTypes = {
  cardDisplayFlag: PropTypes.bool,
  cardNumber: PropTypes.string,
};
CardNumberView.defaultProps = {
  cardDisplayFlag: false,
  cardNumber: '',
};

export default CardNumberView;