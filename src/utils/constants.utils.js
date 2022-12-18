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
