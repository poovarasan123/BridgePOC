import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../Utils/Theme';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

const ChangePassword = ({navigation}) => {
  const [securePasswordEntry, setSecurePasswordEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecurePasswordEntry(!securePasswordEntry);
  };
  const [secureConfirmEntry, setSecureConfirmPassword] = useState(true);

  const toggleConfirmPasswordVisibility = () => {
    setSecureConfirmPassword(!secureConfirmEntry);
  };

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
            navigation.replace('Login');
          }}
        />
        <Text
          style={{
            fontFamily: 'Mulish-Bold',
            fontSize: 24,
            color: COLORS.black,
            marginTop: 30,
          }}>
          Change Password
        </Text>

        <Text style={{marginTop: 30}}>New Password</Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.2,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 10,
            width: '95%',
          }}>
          <Icon
            name="security"
            size={24}
            color={COLORS.primary}
            style={{
              marginStart: 10,
            }}></Icon>
          <TextInput
            placeholder="New Password"
            maxLength={10}
            secureTextEntry={securePasswordEntry}
            style={{
              marginStart: 10,
              width: '80%',
            }}
          />
          <FAIcon
            name={securePasswordEntry ? 'eye' : 'eye-slash'}
            size={20}
            onPress={togglePasswordVisibility}
          />
        </View>
        <Text style={{marginTop: 15}}>Confirm Password</Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.2,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 10,
            width: '95%',
          }}>
          <Icon
            name="security"
            size={24}
            color={COLORS.primary}
            style={{
              marginStart: 10,
            }}></Icon>
          <TextInput
            placeholder="Confirm Password"
            maxLength={10}
            secureTextEntry={secureConfirmEntry}
            style={{
              marginStart: 10,
              width: '80%',
            }}
          />
          <FAIcon
            name={secureConfirmEntry ? 'eye' : 'eye-slash'}
            size={20}
            onPress={toggleConfirmPasswordVisibility}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.replace('Login');
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
  button: {
    height: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 50,
    marginRight: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ChangePassword;
