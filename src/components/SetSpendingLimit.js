import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCurrencyUnits} from 'redux/slices/debitCardSlice';
import Colors from 'utils/colors.utils';
import Badge from 'ui-kit/Badge';
import {PRE_SET_VALUES, SCREEN_HEIGHT} from 'utils/constants.utils';
import {FontSize, Typeface} from 'utils/typefaces.utils';
import TextView from 'ui-kit/TextView';
import Divider from 'ui-kit/Divider';
import IMAGES from 'assets';

const {width, height} = Dimensions.get('screen');

const SetSpendingLimit = props => {
  let [number, onChangeNumber] = useState(null);
  let [isSaveButtonActive] = useState(false);

  const currencyUnits = useSelector(selectCurrencyUnits);
  let appColorSolid = Colors.primaryColor;

  const onChangeNumberMiddle = val => {
    onChangeNumber(val);
  };

  const onSaveButtonPress = () => {};

  return (
    <>
      <View style={styles.sheetContainer}>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 24,
            marginRight: 24,
            flex: 1,
          }}>
          <View style={{marginTop: 32}}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.image} source={IMAGES.timer} />
              <TextView h3>Set a weekly debit card spending limit</TextView>
            </View>
            <View
              style={{
                marginTop: 13,
                height: 33,
                flexDirection: 'row',
                alignContent: 'flex-start',
              }}>
              {/* View for Input */}
              <View
                style={{
                  backgroundColor: appColorSolid,
                  borderRadius: 3,
                  width: 40,
                  height: 24,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* View of currency units */}
                <Text h2>{currencyUnits}</Text>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumberMiddle}
                onSubmitEditing={onSaveButtonPress}
                value={number}
                placeholder="Amount"
                keyboardType="numeric"
                returnKeyType="done"
              />
            </View>
            <Divider height={1} />
            <View>
              {/* View for Note */}
              <TextView h4 h4Style={styles.note}>
                Here weekly means the last 7 days - not the calendar week
              </TextView>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            {/* View for Preset Buttons */}
            <ScrollView horizontal>
              {PRE_SET_VALUES.map((item, index) => {
                return (
                  <View style={{marginRight: 25}}>
                    <Badge
                      key={index.toString()}
                      title={item.value}
                      titleStyle={{color: Colors.white}}
                      customStyles={styles.customBadge}
                      onPress={() => onChangeNumberMiddle(item.value)}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

export default SetSpendingLimit;

const styles = StyleSheet.create({
  input: {
    height: 33,
    marginLeft: 12,
    marginTop: -3.5,
    marginRight: 0,
    marginBottom: 0,
    borderWidth: 0,
    fontWeight: 'bold',
    fontSize: 24,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  customButton: {
    borderRadius: 4,
    height: 40,
    width: (width - 72) / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: Typeface.DemiBold,
    fontSize: 16,
    color: Colors.white,
  },
  saveButtonActive: {
    width: '100%',
    borderRadius: 30,
  },
  loadingOverlay: {
    height: height,
    width: width,
    backgroundColor: 'rgba(0,0,0,0.25)',
    position: 'absolute',
    alignContent: 'center',
    justifyContent: 'center',
  },
  sheetContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: SCREEN_HEIGHT * 0.1,
    flex: 1,
  },
  image: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  note: {
    fontSize: FontSize.medium,
    color: Colors.grey.dark,
    fontFamily: Typeface.Regular,
    paddingVertical: 10,
  },
  customBadge: {
    backgroundColor: Colors.secondaryColor,
    // opacity: 0.1,
    borderRadius: -1,
  },
});
