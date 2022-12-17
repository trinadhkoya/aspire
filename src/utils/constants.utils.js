import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
export const SCREEN_WIDTH = width;

export const CARD_WIDTH = width - 48; //Ensures that the currency notation and the card's left end align just like the mock up
export const CARD_HEIGHT = 0.6 * CARD_WIDTH; // Aspect Ratio of the card is 0.6 [h/w]

export const labels = {
  hideCardNumber: 'Hide card number',
  showCardNumber: 'Show card number',
};
