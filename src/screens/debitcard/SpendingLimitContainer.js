import React from 'react';
import {StyleSheet, View} from 'react-native';
import SetSpendingLimit from './components/SetSpendingLimit';
import Colors from 'utils/colors.utils';
import {labels, SCREEN_HEIGHT} from 'utils/constants.utils';
import {HEADER_HEIGHT, Metrics} from 'utils/screen.utils';
import Header from 'ui-kit/Header';
import TextView from 'ui-kit/TextView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {updateProfileRequest} from 'redux/actions/profile.actions';
import {connect, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'ui-kit/Loader';

const SpendingLimitContainer = ({info, isLoading, navigation}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  const onPressBack = () => {
    navigation.pop();
  };

  const onPressUpdateSpentLimit = value => {
    dispatch(updateProfileRequest(info?.id, {weeklySpendingLimit: value}));
  };

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <View style={styles.container}>
      <Header onPressLeftIcon={onPressBack} />
      <View style={styles.pageTitle}>
        <TextView h2 color={Colors.white}>
          {labels.spendingLimit}
        </TextView>
      </View>
      <View style={[styles.innerContainer, {paddingBottom: insets.bottom}]}>
        <SetSpendingLimit onUpdateSpendLimit={onPressUpdateSpentLimit} />
      </View>
    </View>
  );
};

const {bool, number, shape, string} = PropTypes;

SpendingLimitContainer.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  info: shape({
    name: string.isRequired,
    nameOnCard: string.isRequired,
    availableBalance: string.isRequired,
    currencyUnits: string.isRequired,
    weeklySpendingLimit: number.isRequired,
    cardCVV: string.isRequired,
    cardValidThru: string.isRequired,
    cardNumberVisible: bool.isRequired,
    currencySymbol: string.isRequired,
    cardNumber: string.isRequired,
    id: string.isRequired,
  }).isRequired,
  isUpdated: PropTypes.bool,
};

SpendingLimitContainer.defaultProps = {
  isLoading: false,
  error: null,
  isUpdated: false,
};

const mapStateToProps = ({profile}) => {
  return {
    info: profile.data,
    isLoading: profile.isLoading,
    error: profile.error,
  };
};
export default connect(mapStateToProps)(SpendingLimitContainer);

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
