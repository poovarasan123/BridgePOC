import React, {useEffect} from 'react';
import {View, Image, Text, StatusBar, Button, StyleSheet, Dimensions } from 'react-native';
import {COLORS} from '../Utils/Theme.js';
import {VALUES} from '../Utils/Constants.js';


import Login from './LoginScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const image = require('../assets/logo.png');

  const { width, height } = Dimensions.get('window');

  console.log('Window Width:', width);
console.log('Window Height:', height);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(VALUES.IS_INTRO_SEEN);
      console.log(`data: ${value}`);

      console.log('app executed successfully');
      navigation.navigate('OnBoard');
    } catch (error) {
      console.log(error);
    }
  };

  setTimeout(async () => {
    // console.log(`data1: ${getData()}`);
    const value = await AsyncStorage.getItem(VALUES.IS_INTRO_SEEN);
    console.log(`data: ${value}`);
    if (value) {
      // navigation.replace('Login');
      try {
        console.log(`data: ${value}`);
        console.log('if app executed successfully');
        navigation.replace('Home');
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('else app executed successfully');
      navigation.replace('OnBoard');
    }
  }, 3000);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <Image source={image} style={styles.logo} />
      <Text style={styles.nameText}>Aalaiyar Motors</Text>
      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('OnBoard')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  nameText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
    fontFamily: 'Mulish-Black',
  },
});

export default SplashScreen;
