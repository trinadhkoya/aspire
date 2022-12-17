import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {selectAppColorSolid} from 'redux/slices/appVariablesSlice';
import {
  selectCardCVV,
  selectCardNumber,
  selectCardNumberVisible,
  selectCardValidThru,
  selectNameOnCard,
  setCardNumberVisible,
} from 'redux/slices/debitCardSlice';
import Button from 'ui-kit/Button';

const {width} = Dimensions.get('screen');

const CARD_WIDTH = width - 48; //Ensures that the currency notation and the card's left end align just like the mock up
const CARD_HEIGHT = 0.6 * CARD_WIDTH; // Aspect Ratio of the card is 0.6 [h/w]

const cardNumberDisplayRender = (cardDisplayFlag, cardNumber) => {
  if (!(cardDisplayFlag != null && cardNumber != null)) {
    return <View style={{display: 'none'}} />;
  }
  if (cardDisplayFlag) {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'white',
            fontWeight: '500',
            fontSize: 16,
            width: 50,
            letterSpacing: 2,
          }}>
          {cardNumber.substring(0, 4)}
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '500',
            fontSize: 16,
            marginLeft: 20,
            width: 50,
            letterSpacing: 2,
          }}>
          {cardNumber.substring(4, 8)}
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '500',
            fontSize: 16,
            marginLeft: 20,
            width: 50,
            letterSpacing: 2,
          }}>
          {cardNumber.substring(8, 12)}
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: '500',
            fontSize: 16,
            marginLeft: 20,
            width: 50,
            letterSpacing: 2,
          }}>
          {cardNumber.substring(12, 16)}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{marginLeft: -4, flexDirection: 'row', width: 50}}>
          <View style={styles.bullets} />
          <View style={styles.bullets} />
          <View style={styles.bullets} />
          <View style={styles.bullets} />
        </View>
        <View style={{marginLeft: 20, flexDirection: 'row', width: 50}}>
          <View style={styles.bullets} />
          <View style={styles.bullets} />
          <View style={styles.bullets} />
          <View style={styles.bullets} />
        </View>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            marginRight: 20,
            width: 50,
          }}>
          <View style={styles.bullets} />
          <View style={styles.bullets} />
          <View style={styles.bullets} />
          <View style={styles.bullets} />
        </View>
        <Text
          style={{
            color: 'white',
            fontWeight: '500',
            fontSize: 16,
            width: 50,
            letterSpacing: 2,
          }}>
          {cardNumber.substring(12, 16)}
        </Text>
      </View>
    );
  }
};

const CardView = () => {
  const store = useStore();
  let state = store.getState();
  const dispatch = useDispatch();

  let cardDetailsDisplayed = useSelector(selectCardNumberVisible); //selectCardNumberVisible;
  let cardNumber = useSelector(selectCardNumber); //selectCardNumber;
  let cardValidThru = useSelector(selectCardValidThru); //selectCardValidThru;
  let cardCVV = useSelector(selectCardCVV); //selectCardCVV;
  let nameOnCard = useSelector(selectNameOnCard); //selectNameOnCard;
  let appColorSolid = useSelector(selectAppColorSolid);

  return (
    <View
      style={{
        backgroundColor: 'transparent',
        width: CARD_WIDTH,
        height: CARD_HEIGHT + 32,
        marginTop: -90,
      }}>
      {/* A view for the card image : Width is calculated as a percentage of the screen width as per shared design, height is calculated such as to maintain the aspect ratio */}
      <View
        style={{
          backgroundColor: 'white',
          alignSelf: 'flex-end',
          width: 151,
          height: 45,
          borderTopRightRadius: 6,
          borderTopLeftRadius: 6,
        }}>
        {/* A view for the "Show Card Number Button" */}
        <Button
          type="clear"
          title={cardDetailsDisplayed ? 'Hide card number' : 'Show card number'}
          titleStyle={{
            color: appColorSolid,
            fontSize: 12,
            fontWeight: '600',
          }}
          // icon={
          //   <Image
          //     style={styles.iconImage}
          //     source={
          //       cardDetailsDisplayed
          //         ? require('../assets/eyeClosed.png')
          //         : require('../assets/eyeOpen.png')
          //     }
          //     resizeMode="contain"
          //   />
          // }
          onPress={() => {
            if (cardDetailsDisplayed) {
              dispatch(
                setCardNumberVisible({
                  cardNumberVisible: false,
                }),
              );
              // forceUpdate();
            } else {
              dispatch(
                setCardNumberVisible({
                  cardNumberVisible: true,
                }),
              );
              // forceUpdate();
            }
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: appColorSolid,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          borderRadius: 10,
          marginTop: -13,
          padding: 0,
          ...styles.shadow,
          zIndex: 9999,
        }}>
        {/* A view for the actual card */}
        <View
          style={{
            marginTop: 24,
            height: 21,
            marginRight: 24,
            alignItems: 'flex-end',
          }}>
          {/* View For Top Logo */}
          <Image
            style={{width: 74}}
            source={require('../assets/AspireLogo.png')}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            height: CARD_HEIGHT - 89,
            flexDirection: 'column',
            alignContent: 'space-between',
          }}>
          {/* Value of 89 is calculated as (margin top + height) of Aspire logo at top; +  (margin bottom + height) of VISA logo at the bottom */}
          {/* View for card details like name, number, date */}
          <View style={{flex: 1, justifyContent: 'center', marginLeft: 24}}>
            {/* View for User Name */}
            <Text style={{color: 'white', fontWeight: '700', fontSize: 22}}>
              {nameOnCard}
            </Text>
          </View>
          <View
            style={{flex: 1, marginLeft: 24, alignContent: 'space-between'}}>
            {/* View for card number valid thru and cvv */}
            <View style={{height: 17, flex: 1}}>
              {/* View for Card Number */}
              {cardNumberDisplayRender(cardDetailsDisplayed, cardNumber)}
            </View>
            <View style={{flexDirection: 'row'}}>
              {/* View for valid thru and cvv */}
              <Text style={{color: 'white', fontWeight: '400', fontSize: 16}}>
                Thru: {cardValidThru}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '400',
                  fontSize: 15,
                  marginLeft: 10,
                }}>
                CVV: {cardDetailsDisplayed ? cardCVV : '* * *'}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 24,
            marginRight: 24,
            height: 20,
            alignItems: 'flex-end',
          }}>
          {/* View for bottom VISA logo */}
          <Image
            style={{width: 59}}
            source={require('../assets/VisaLogo.png')}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: width,
          height: 85,
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          marginBottom: 0,
          marginTop: -85,
          marginLeft: -24,
          marginRight: -24,
        }}
      />
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
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
});
