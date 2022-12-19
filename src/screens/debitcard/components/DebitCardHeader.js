import {Image, StyleSheet, View} from 'react-native';
import IMAGES from 'assets';
import TextView from 'ui-kit/TextView';
import Colors from 'utils/colors.utils';
import {labels} from 'utils/constants.utils';
import PriceBadge from 'ui-kit/PriceBadge';
import React from 'react';
import {FontSize, Typeface} from 'utils/typefaces.utils';

function DebitCardHeader(props) {
  return (
    <View style={styles.container} onLayout={props.onLayout}>
      <View style={styles.imgContainer}>
        <Image style={styles.brandLogo} source={IMAGES.brandLogo} />
      </View>
      <View style={styles.debitCardLabel}>
        <TextView h1 color={Colors.white}>
          {labels.debitCard}
        </TextView>
      </View>
      <TextView h3 color={Colors.white} h3Style={styles.availBalLabel}>
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

  debitCardLabel: {
    paddingBottom: 24,
  },
  brandLogo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  availBalLabel: {
    fontFamily: Typeface.Medium,
    fontSize: FontSize.medium,
  },
});

export default DebitCardHeader;
