import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from 'utils/colors.utils';
import {CARD_HEIGHT, CARD_WIDTH, labels} from 'utils/constants.utils';
import IMAGES from 'assets';
import CardNumberView from 'components/CardNumberView';
import Badge from 'ui-kit/Badge';
import {scale} from 'utils/screen.utils';
import {font, font as Font, fontSize} from 'utils/typefaces.utils';

const CardView = ({userInfo}) => {
  const cardNumber = userInfo.cardNumber;
  const cardValidThru = userInfo.cardValidThru;
  const cardCVV = userInfo.cardCVV;
  const nameOnCard = userInfo.nameOnCard;

  const [isCardNumVisible, setIsCardNumberVisible] = useState(true);

  const onToggle = () => {
    setIsCardNumberVisible(!isCardNumVisible);
  };
  const badgeTitle = isCardNumVisible
    ? labels.hideCardNumber
    : labels.showCardNumber;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Badge title={badgeTitle} onPress={onToggle} />
      </View>
      <View style={[styles.actualCard, styles.shadow]}>
        <View style={styles.cardBrandView}>
          <Image
            style={styles.cardBrand}
            source={IMAGES.aspireLogo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.cardView}>
          <View style={styles.cardContent}>
            <View style={styles.cardHolderNameView}>
              <Text style={styles.cardHolderName}>{nameOnCard}</Text>
            </View>
            <View style={styles.cardElementsView}>
              <View style={styles.cardNumberView}>
                <CardNumberView
                  shouldDisplayCardDetails={isCardNumVisible}
                  cardNum={cardNumber}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.validityView}>Thru: {cardValidThru}</Text>
                <Text style={styles.expiryView}>
                  CVV: {isCardNumVisible ? cardCVV : '***'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardProvider}>
          <Image source={IMAGES.visa} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    width: CARD_WIDTH,
    height: CARD_HEIGHT + 44, //44 is for show/hide card number component
  },
  innerContainer: {
    backgroundColor: Colors.white,
    alignSelf: 'flex-end',
    marginRight: 24,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginBottom: -5,
    zIndex: -1,
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
    shadowColor: Colors.black,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 3,
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
    marginHorizontal: scale(20),
    height: CARD_HEIGHT,
    borderRadius: 10,
    zIndex: 1,
    paddingLeft: 20,
    backgroundColor: Colors.primaryColor,
  },
  cardBrandView: {
    marginTop: 24,
    height: 21,
    marginRight: 24,
    alignItems: 'flex-end',
  },
  cardHolderName: {
    color: 'white',
    fontFamily: Font.Bold,
    fontSize: fontSize.large,
    letterSpacing: 0.53,
  },
  cardProvider: {
    marginBottom: 24,
    marginRight: 24,
    height: 20,
    alignItems: 'flex-end',
  },
  validityView: {
    color: 'white',
    fontSize: fontSize.medium,
    fontFamily: font.DemiBold,
    marginRight: 20,
  },
  expiryView: {
    color: 'white',
    fontSize: fontSize.medium,
    fontFamily: font.DemiBold,
  },
  cardHolderNameView: {
    flex: 1,
    justifyContent: 'center',
  },
  cardNumberView: {height: 17, flex: 1},
  cardElementsView: {flex: 1, alignContent: 'space-between'},
  cardContent: {
    flex: 1,
  },
  cardView: {height: CARD_HEIGHT - 90},
});
