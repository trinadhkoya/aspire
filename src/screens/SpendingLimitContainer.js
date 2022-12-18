import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SetSpendingLimit from '../components/SetSpendingLimit';
import Colors from 'utils/colors.utils';

const SpendingLimitContainer = props => {
  return (
    <SafeAreaView style={styles.background}>
      {/*<Header title={'1'} paddingTop={100} />*/}
      {/*<View style={{top: SCREEN_HEIGHT * 0.2}}>*/}
      <SetSpendingLimit />
      {/*</View>*/}
    </SafeAreaView>
  );
};

export default SpendingLimitContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'space-between',
    marginLeft: 0,
    marginRight: 0,
    flex: 1,
  },
  background: {
    backgroundColor: Colors.secondaryColor,
    flex: 1,
  },
});
