import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  StatusBar,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../Utils/Theme';
import Icons from 'react-native-vector-icons/AntDesign';

const OTP = ({navigation}) => {
  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View style={{marginTop: 20, marginStart: 20}}>
        <Icons
          name="arrowleft"
          size={28}
          color={COLORS.black}
          onPress={() => {
            console.log('clicked');
            navigation.goBack();
          }}
        />
        <Text
          style={{
            fontFamily: 'Mulish-Bold',
            fontSize: 24,
            color: COLORS.black,
            marginTop: 30,
          }}>
          Enter OTP
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            width: 350,
          }}>
          <TextInput keyboardType="number-pad" style={styles.input} />
          <TextInput keyboardType="number-pad" style={styles.input} />
          <TextInput keyboardType="number-pad" style={styles.input} />
          <TextInput keyboardType="number-pad" style={styles.input} />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // console.warn('OTP submit clicked');
            navigation.replace('cPassword');
          }}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  input: {
    width: 55,
    height: 55,
    backgroundColor: COLORS.input_back,
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 0.5,
    marginHorizontal: 8,
  },
  button: {
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    marginTop: 50,
    marginRight: 20,
    justifyContent: 'center',
  },
  buttonText: {
    flexDirection: 'column',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Mulish-Bold',
  },
});

export default OTP;
