import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import SetSpendingLimit from '../components/SetSpendingLimit';
import Colors from 'utils/colors.utils';
import {labels, SCREEN_HEIGHT} from 'utils/constants.utils';
import {HEADER_HEIGHT, Metrics} from 'utils/screen.utils';
import Header from 'ui-kit/Header';
import TextView from 'ui-kit/TextView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SpendingLimitContainer = props => {
  const insets = useSafeAreaInsets();

  const onPressBack = () => {
    props.navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Header onPressLeftIcon={onPressBack} />
      <View style={styles.pageTitle}>
        <TextView h2 color={Colors.white}>
          {labels.spendingLimit}
        </TextView>
      </View>
      <View style={[styles.innerContainer, {paddingBottom: insets.bottom}]}>
        <SetSpendingLimit />
      </View>
    </View>
  );
};

export default SpendingLimitContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryColor,
    flex: 1,
  },
  innerContainer: {
    backgroundColor: Colors.white,
    marginTop: SCREEN_HEIGHT * 0.1,
    borderTopLeftRadius: Metrics.borderRadius,
    borderTopRightRadius: Metrics.borderRadius,
    paddingTop: 32,
    flex: 1,
  },
  pageTitle: {
    marginTop: HEADER_HEIGHT,
    paddingHorizontal: 24,
  },
});
