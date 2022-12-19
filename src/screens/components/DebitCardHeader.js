import {Image, StyleSheet, View} from 'react-native';
import IMAGES from 'assets';
import TextView from 'ui-kit/TextView';
import Colors from 'utils/colors.utils';
import {labels, SCREEN_HEIGHT, SCREEN_WIDTH} from 'utils/constants.utils';
import PriceBadge from 'ui-kit/PriceBadge';
import React from 'react';

function DebitCardHeader(props) {
  return (
    <View style={styles.container} onLayout={props.onLayout}>
      <View style={styles.imgContainer}>
        <Image style={styles.brandLogo} source={IMAGES.brandLogo} />
      </View>
      <TextView h1 color={Colors.white}>
        {labels.debitCard}
      </TextView>
      <TextView h4 color={Colors.white}>
        {labels.availableBalance}
      </TextView>
      <PriceBadge
        currency={props.currency}
        availableBalance={props.availableBalance}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
  },
  imgContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'relative',
    paddingRight: 24,
  },
  text: {
    color: 'blue',
  },
  background: {
    backgroundColor: Colors.secondaryColor,
    flex: 1,
  },
  behind: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    top: 0,
    backgroundColor: Colors.white,
  },
  debitCardLabel: {
    paddingBottom: 24,
  },
  brandLogo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default DebitCardHeader;
