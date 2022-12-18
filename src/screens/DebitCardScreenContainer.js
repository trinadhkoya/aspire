import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import MenuBottomSheet from '../components/MenuBottomSheet';
import TextElement from 'ui-kit/TextElement';
import Colors from 'utils/colors.utils';
import {font} from 'utils/typefaces.utils';
import PriceBadge from 'ui-kit/PriceBadge';
import {labels, SCREEN_HEIGHT, SCREEN_WIDTH} from 'utils/constants.utils';
import IMAGES from 'assets';

function DebitCardScreenContainer(props) {
  let currency = 'S$';
  let availableBalance = '2000';

  const [headerOccupiedSpace, setHeaderOccupiedSpace] = useState(
    SCREEN_HEIGHT * 0.2,
  );

  /** Calculate how much space top section occupied to place card view */
  const onLayout = event => {
    const {height} = event.nativeEvent.layout;
    setHeaderOccupiedSpace(height);
  };

  return (
    <SafeAreaView style={styles.background}>
      <React.Fragment>
        <View style={styles.container} onLayout={onLayout}>
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
      <MenuBottomSheet {...props} headerOccupiedSpace={headerOccupiedSpace} />
    </SafeAreaView>
  );
}

export default DebitCardScreenContainer;

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
    color: Colors.white,
    fontFamily: font.Bold,
    paddingBottom: 24,
  },
  brandLogo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
