import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MenuBottomSheet from './components/MenuBottomSheet';
import Colors from 'utils/colors.utils';
import {labels, SCREEN_HEIGHT} from 'utils/constants.utils';
import {fetchProfileRequest} from 'redux/actions/profile.actions';
import {connect, useDispatch} from 'react-redux';
import DebitCardHeader from 'screens/debitcard/components/DebitCardHeader';
import Loader from 'ui-kit/Loader';
import PropTypes from 'prop-types';

function DebitCardScreenContainer(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileRequest(1));
  }, [dispatch]);

  const [headerOccupiedSpace, setHeaderOccupiedSpace] = useState(
    SCREEN_HEIGHT * 0.2,
  );

  /** Calculate how much space top section occupied to place card view */
  const onLayout = event => {
    const {height} = event.nativeEvent.layout;
    setHeaderOccupiedSpace(height);
  };

  if (props.isLoading) {
    return (
      <Loader
        isLoading={props.isLoading}
        loadingIndicatorText={labels.loading}
      />
    );
  }

  return (
    <SafeAreaView style={styles.background}>
      <React.Fragment>
        <DebitCardHeader
          onLayout={onLayout}
          currency={props?.info?.currencySymbol}
          availableBalance={props?.info?.availableBalance}
        />
      </React.Fragment>
      <MenuBottomSheet
        userInfo={props?.info}
        headerOccupiedSpace={headerOccupiedSpace}
        {...props}
      />
    </SafeAreaView>
  );
}
DebitCardScreenContainer.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  info: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

DebitCardScreenContainer.defaultProps = {
  isLoading: false,
  error: null,
  info: {},
};

const mapStateToProps = state => {
  return {
    info: state.profile.data,
    isLoading: state.profile.isLoading,
    error: state.profile.error,
  };
};
export default connect(mapStateToProps)(DebitCardScreenContainer);

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.secondaryColor,
    flex: 1,
  },
});
