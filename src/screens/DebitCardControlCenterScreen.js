import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import MenuBottomSheet from '../components/MenuBottomSheet';
import TextElement from 'ui-kit/TextElement';
import Colors from 'utils/colors.utils';
import {font} from 'utils/typefaces.utils';
import PriceBadge from 'ui-kit/PriceBadge';
import {labels, SCREEN_HEIGHT, SCREEN_WIDTH} from 'utils/constants.utils';
import IMAGES from 'assets';

function DebitCardControlCenterScreen(props: {}) {
  let currency = 'INR';
  let availableBalance = '2000';

  return (
    <SafeAreaView style={styles.background}>
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image style={styles.brandLogo} source={IMAGES.brandLogo} />
          </View>
          <TextElement h1 h1Style={styles.debitCardLabel}>
            {labels.debitCard}
          </TextElement>
          <TextElement>{labels.availableBalance}</TextElement>
          <PriceBadge currency={currency} availableBalance={availableBalance} />
        </View>
      </React.Fragment>
      <MenuBottomSheet props={props} />
    </SafeAreaView>
  );
}

export default DebitCardControlCenterScreen;

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
    backgroundColor: '#0C365A',
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
    color: Colors.white,
    fontFamily: font.Bold,
  },
  brandLogo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
