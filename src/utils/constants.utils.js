import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('screen');
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const CARD_WIDTH = width; //Ensures that the currency notation and the card's left end align just like the mock up
export const CARD_HEIGHT = SCREEN_HEIGHT * 0.25; // Aspect Ratio of the card is 0.6 [h/w]

export const labels = {
  hideCardNumber: 'Hide card number',
  showCardNumber: 'Show card number',
  debitCard: 'Debit Card',
  availableBalance: 'Available Balance',
  debitCardSpendingLimit: 'Debit Card Spending Limit',
  tabs: {
    debitCard: 'Debit Cards',
    home: 'Home',
  },
  save: 'Save',
};

export const userInfo = {
  cardNumberVisible: false,
  cardNumber: '1234567812345678',
  cardValidThru: '10/28',
  cardCVV: '666',
  nameOnCard: 'Trinadh Koya',
  availableBalance: '1,000,000',
  currencyUnits: 'S$',
  weeklySpendingLimit: -1,
  weeklySpendingLimitExhausted: -1,
  id: 1,
};

export const PRE_SET_VALUES = [
  {id: 1, value: 1000, isSelected: true, currency: 'S$'},
  {id: 2, value: 2000, isSelected: false, currency: 'S$'},
  {id: 3, value: 3000, isSelected: false, currency: 'S$'},
  {id: 4, value: 4000, isSelected: false, currency: 'S$'},
];

const isSpendingLimitSet = false;
const currencyUnits = 'S$';
const spendingLimit = 40000;

export const DEBIT_CARD_MENU_ITEMS = [
  {
    key: '1',
    menuTitle: 'Top-up account',
    menuSubtitle: 'Deposit money to your account to use with card',
    iconAssetUri: require('../assets/insight.png'),
    buttonState: -1,
    itemEnabled: false,
  },
  {
    key: '2',
    menuTitle: 'Weekly spending limit',
    menuSubtitle: isSpendingLimitSet
      ? 'Your weekly spending limit is ' + currencyUnits + ' ' + spendingLimit
      : "You haven't set any spending limit on card",
    iconAssetUri: require('../assets/Transfer-2.png'),
    buttonState: isSpendingLimitSet ? 1 : 0,
    itemEnabled: true,
  },
  {
    key: '3',
    menuTitle: 'Freeze card',
    menuSubtitle: 'Your debit card is currently active',
    iconAssetUri: require('../assets/Transfer-3.png'),
    buttonState: 0,
    itemEnabled: false,
  },
  {
    key: '4',
    menuTitle: 'Get a new card',
    menuSubtitle: 'This deactivates your current debit card',
    iconAssetUri: require('../assets/Transfer-1.png'),
    buttonState: -1,
    itemEnabled: false,
  },
  {
    key: '5',
    menuTitle: 'Deactivated cards',
    menuSubtitle: 'Your previously deactivated cards',
    iconAssetUri: require('../assets/Transfer.png'),
    buttonState: -1,
    itemEnabled: false,
  },
];
