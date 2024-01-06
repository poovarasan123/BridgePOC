import React, {useRef, useState} from 'react';
import {
  NativeModules, 
  View,
  Text,
  Button,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {COLORS} from '../Utils/Theme';
import {ICONS} from '../Utils/Icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';


const { HelloPT } = NativeModules;



const Change = () => {
  HelloPT.getString((err, msg) => {
   if (err) {
    console.log(err);
    return;
   }
  console.log(msg)
 })
}

const Login = ({navigation}) => {
  const logo = require('../assets/logo.png');
  const login_back = require('../assets/login_back2.png');

  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const buttonRef = useRef(null);
  const inputUser = useRef(null);
  const inputPass = useRef(null);

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const handleFunction = nameFunction => {
    nameFunction.current.focus();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <KeyboardAvoidingView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}> */}
      <StatusBar
        backgroundColor={'#d3d3d320'} //f8f8ff
        barStyle={'dark-content'}
      />
      <Image source={logo} style={styles.logo} />
      <Text style={styles.nameText}>AAlaiyar Motors</Text>
      <Image source={login_back} style={styles.loginBackground} />

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputStyle}>
          <Icon
            name="user-circle"
            size={20}
            color="#00000080"
            style={{marginStart: 10}}
          />
          <TextInput
            ref={inputUser}
            placeholder="Username"
            keyboardType="default"
            value={username}
            returnKeyType="done"
            onChangeText={onChangeUsername}
            style={{marginStart: 5}}
            maxLength={20}
            width={'90%'}
            onSubmitEditing={() => handleFunction(inputPass)}
          />
        </View>

        <View style={styles.inputStyle}>
          <Icons
            name="lock-outline"
            size={20}
            color="#00000080"
            style={{marginStart: 10}}
          />
          <TextInput
            ref={inputPass}
            placeholder="Password"
            value={password}
            returnKeyType="next"
            onChangeText={onChangePassword}
            style={{marginStart: 5}}
            textContentType="newPassword"
            secureTextEntry={secureTextEntry}
            maxLength={20}
            width={'80%'}
            enablesReturnKeyAutomatically
            onSubmitEditing={() => handleFunction(buttonRef)}
          />
          <Icon
            name={secureTextEntry ? 'eye' : 'eye-slash'}
            size={20}
            onPress={togglePasswordVisibility}
          />
        </View>

        <Text
          style={styles.forgotText}
          onPress={() => {
            console.log('forgot password clicked');
            navigation.navigate('ForgotPassword');
          }}>
          Forgot Password ?
        </Text>

        <Text
          style={styles.submitButton}
          onPress={Change}
          // onPress={
          //   () => {
          //   // console.log('submit btn pressed');
          //   Change
          //   // navigation.navigate('Home');
          // }}
          ref={buttonRef}>
          Submit
        </Text>
      </View>
      {/* </ScrollView>
      </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 30,
  },
  nameText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  loginBackground: {
    width: '100%',
  },
  loginContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    width: '95%',
    flexDirection: 'column',
    alignItems: 'center',
    elevation: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 20,
    position: 'absolute',
    bottom: 10,
  },
  loginText: {
    fontWeight: 'bold',
    color: COLORS.primary,
    fontSize: 20,
    marginTop: 10,
  },
  inputStyle: {
    flexDirection: 'row',
    borderWidth: 0.5,
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    width: '95%',
    backgroundColor: COLORS.input_back,
    alignItems: 'center',
    borderColor: COLORS.primary,
  },
  forgotText: {
    width: '100%',
    textAlign: 'right',
    marginEnd: 20,
    marginTop: 10,
    fontSize: 15,
  },
  submitButton: {
    width: '70%',
    height: 50,
    borderRadius: 25,
    marginTop: 35,
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 30,
  },
});

export default Login;
