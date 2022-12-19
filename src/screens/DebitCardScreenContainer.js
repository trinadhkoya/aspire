import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MenuBottomSheet from '../components/MenuBottomSheet';
import Colors from 'utils/colors.utils';
import {labels, SCREEN_HEIGHT} from 'utils/constants.utils';
import {useRoute} from '@react-navigation/native';
import {fetchProfileRequest} from 'redux/actions/profile.actions';
import {connect, useDispatch} from 'react-redux';
import DebitCardHeader from 'screens/components/DebitCardHeader';
import Loader from 'ui-kit/Loader';
import PropTypes from 'prop-types';

function DebitCardScreenContainer(props) {
  let currency = 'S$';
  let availableBalance = '2000';
  const route = useRoute();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileRequest(1));
  }, []);

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
          currency={currency}
          availableBalance={availableBalance}
        />
      </React.Fragment>
      <MenuBottomSheet
        route={route}
        {...props}
        headerOccupiedSpace={headerOccupiedSpace}
      />
    </SafeAreaView>
  );
}
DebitCardScreenContainer.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  info: PropTypes.object,
};

DebitCardScreenContainer.propTypes = {
  isLoading: false,
  error: '',
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
