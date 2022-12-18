import {Dimensions} from 'react-native';

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
};

export const userInfo = {
  cardNumberVisible: false,
  cardNumber: '1234567812345678',
  cardValidThru: '10/28',
  cardCVV: '666',
  nameOnCard: 'Trinadh Koya',
  availableBalance: '1,000,000',
  currencyUnits: 'WVD',
  weeklySpendingLimit: -1,
  weeklySpendingLimitExhausted: -1,
  id:1
};

let isSpendingLimitSet = false;
let currencyUnits = 'INR';
let spendingLimit = 40000;

export const DEBIT_CARD_MENU_ITEMS = [
  {
    key: 'MenuItem#1', // A unique key to supress the warning and optimize changes
    menuTitle: 'Top-up account', // The Title of the menu Item
    menuSubtitle: 'Deposit money to your account to use with card', // The subtitle of the menu Item
    iconAssetUri: require('../assets/insight.png'), // Uri for the icon
    buttonState: -1, //A parameter that suggest about the radio button -1: Hidden; 0: Button inactive; 1: Button active
    itemEnabled: false, //A Parameter that tells if the menu item is enabled, therefore touchable opacity behavior
  },
  {
    key: 'MenuItem#2', // A unique key to supress the warning and optimize changes
    menuTitle: 'Weekly spending limit', // The Title of the menu Item
    menuSubtitle: isSpendingLimitSet
      ? 'Your weekly spending limit is ' + currencyUnits + ' ' + spendingLimit
      : "You haven't set any spending limit on card", // The subtitle of the menu Item
    iconAssetUri: require('../assets/Transfer-2.png'), // Uri for the icon
    buttonState: isSpendingLimitSet ? 1 : 0, //A parameter that suggest about the radio button -1: Hidden; 0: Button inactive; 1: Button active
    itemEnabled: true, //A Parameter that tells if the menu item is enabled, therefore touchable opacity behavior
  },
  {
    key: 'MenuItem#3', // A unique key to supress the warning and optimize changes
    menuTitle: 'Freeze card', // The Title of the menu Item
    menuSubtitle: 'Your debit card is currently active', // The subtitle of the menu Item
    iconAssetUri: require('../assets/Transfer-3.png'), // Uri for the icon
    buttonState: 0, //A parameter that suggest about the radio button -1: Hidden; 0: Button inactive; 1: Button active
    itemEnabled: false, //A Parameter that tells if the menu item is enabled, therefore touchable opacity behavior
  },
  {
    key: 'MenuItem#4', // A unique key to supress the warning and optimize changes
    menuTitle: 'Get a new card', // The Title of the menu Item
    menuSubtitle: 'This deactivates your current debit card', // The subtitle of the menu Item
    iconAssetUri: require('../assets/Transfer-1.png'), // Uri for the icon
    buttonState: -1, //A parameter that suggest about the radio button -1: Hidden; 0: Button inactive; 1: Button active
    itemEnabled: false, //A Parameter that tells if the menu item is enabled, therefore touchable opacity behavior
  },
  {
    key: 'MenuItem#5', // A unique key to supress the warning and optimize changes
    menuTitle: 'Deactivated cards', // The Title of the menu Item
    menuSubtitle: 'Your previously deactivated cards', // The subtitle of the menu Item
    iconAssetUri: require('../assets/Transfer.png'), // Uri for the icon
    buttonState: -1, //A parameter that suggest about the radio button -1: Hidden; 0: Button inactive; 1: Button active
    itemEnabled: false, //A Parameter that tells if the menu item is enabled, therefore touchable opacity behavior
  },
];
