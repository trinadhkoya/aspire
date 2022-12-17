import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectAppColorSolid} from 'redux/slices/appVariablesSlice';
import {
  selectCardCVV,
  selectCardNumber,
  selectCardNumberVisible,
  selectCardValidThru,
  selectNameOnCard,
  setCardNumberVisible,
} from 'redux/slices/debitCardSlice';
import Colors from 'utils/colors.utils';
import {
  CARD_HEIGHT,
  CARD_WIDTH,
  labels,
  SCREEN_WIDTH,
} from 'utils/constants.utils';
import IMAGES from 'assets';
import CardNumberView from 'components/CardNumberView';
import Badge from 'ui-kit/Badge';

const CardView = () => {
  const dispatch = useDispatch();
  const isCardDataVisible = useSelector(selectCardNumberVisible); //selectCardNumberVisible;
  const cardNumber = useSelector(selectCardNumber); //selectCardNumber;
  const cardValidThru = useSelector(selectCardValidThru); //selectCardValidThru;
  const cardCVV = useSelector(selectCardCVV); //selectCardCVV;
  const nameOnCard = useSelector(selectNameOnCard); //selectNameOnCard;
  const appColorSolid = useSelector(selectAppColorSolid);

  const onToggle = () => {
    dispatch(setCardNumberVisible({cardNumberVisible: !isCardDataVisible}));
  };
  const badgetTitle = isCardDataVisible
    ? labels.hideCardNumber
    : labels.showCardNumber;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Badge title={badgetTitle} onPress={onToggle} />
      </View>
      <View
        style={[
          styles.actualCard,
          styles.shadow,
          {backgroundColor: appColorSolid},
        ]}>
        <View style={styles.cardBrandView}>
          <Image
            style={styles.cardBrand}
            source={IMAGES.aspireLogo}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            height: CARD_HEIGHT - 89,
            flexDirection: 'column',
            alignContent: 'space-between',
          }}>
          <View style={{marginLeft: 24, flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.cardHolderName}>{nameOnCard}</Text>
            </View>
            <View style={{flex: 1, alignContent: 'space-between'}}>
              <View style={{height: 17, flex: 1}}>
                <CardNumberView
                  cardDisplayFlag={isCardDataVisible}
                  cardNumber={cardNumber}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.validityView}>Thru: {cardValidThru}</Text>
                <Text style={styles.expiryView}>
                  CVV: {isCardDataVisible ? cardCVV : '***'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardProvider}>
          <Image source={IMAGES.visa} resizeMode="contain" />
        </View>
      </View>
      <View style={styles.modalShape} />
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    width: CARD_WIDTH,
    height: CARD_HEIGHT + 32,
    marginTop: -50,
  },
  innerContainer: {
    backgroundColor: Colors.white,
    alignSelf: 'flex-end',
    maxWidth: SCREEN_WIDTH * 0.4,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
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
    alignSelf: 'center',
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
