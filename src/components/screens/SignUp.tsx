import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {COLOURS} from '../database/Database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DismissKeyboard from '../components/DismissKeyboard';

const SignUp = ({navigation}: any) => {
  interface Errors {
    fullName: string;
    phoneNo: string;
    email: string;
    password: string;
  }

  const [inputs, setInputs] = useState({
    fullName: '',
    phoneNo: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Errors>({
    fullName: '',
    phoneNo: '',
    email: '',
    password: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const register = () => {
    setTimeout(() => {
      try {
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        setInputs({
          fullName: '',
          phoneNo: '',
          email: '',
          password: '',
        });
        navigation.navigate('SignIn');
        ToastAndroid.show('User Register Completed.', ToastAndroid.SHORT);
      } catch (error) {
        ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
      }
    }, 3000);
  };

  const handleOnchange = (text: any, input: any) => {
    setInputs(prevState => ({...prevState, [input]: text}));

    let isValid = true;

    if (!inputs.email) {
      isValid = false;
    }

    if (!inputs.fullName) {
      isValid = false;
    }

    if (!inputs.phoneNo) {
      isValid = false;
    }

    if (!inputs.password) {
      isValid = false;
    }

    setIsFormValid(isValid);
  };

  return (
    <DismissKeyboard>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Image
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
            marginTop: 50,
            borderRadius: 50,
          }}
          source={require('../database/images/login/logo.png')}
        />
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text
            style={{
              color: COLOURS.blue,
              fontSize: 40,
              fontWeight: '800',
              letterSpacing: 1.5,
              marginBottom: 20,
            }}>
            Sign Up
          </Text>
          <View
            style={{
              height: 55,
              backgroundColor: COLOURS.light,
              flexDirection: 'row',
              paddingHorizontal: 15,
              borderWidth: 1,
              width: '86%',
              borderRadius: 5,
              marginBottom: 10,
              borderColor: !inputs.fullName.match(/^(?! *$)[a-zA-Z0-9 ]*$/)
                ? 'red'
                : 'black',
            }}>
            <TextInput
              onChangeText={text => handleOnchange(text, 'fullName')}
              style={{
                height: 55,
                width: '86%',
                color: COLOURS.black,
                fontSize: 14,
              }}
              placeholderTextColor="#000"
              placeholder="Enter Your Full Name"
            />
            <Text style={{color: 'red'}}>{errors.fullName}</Text>
          </View>
          <View
            style={{
              height: 55,
              backgroundColor: COLOURS.light,
              flexDirection: 'row',
              paddingHorizontal: 15,
              borderWidth: 1,
              width: '86%',
              borderRadius: 5,
              marginBottom: 10,
              borderColor: !inputs.phoneNo.match(/^(?!0+$)(?:0\d{9}|94\d{9})$/)
                ? 'red'
                : 'black',
            }}>
            <TextInput
              onChangeText={text => handleOnchange(text, 'phoneNo')}
              style={{
                height: 55,
                width: '86%',
                color: COLOURS.black,
                fontSize: 14,
              }}
              keyboardType="numeric"
              placeholderTextColor="#000"
              placeholder="Enater Your Phone Number"
            />
          </View>
          <View
            style={{
              height: 55,
              backgroundColor: COLOURS.light,
              flexDirection: 'row',
              paddingHorizontal: 15,
              borderWidth: 1,
              width: '86%',
              borderRadius: 5,
              marginBottom: 10,
              borderColor: !inputs.email.match(
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              )
                ? 'red'
                : 'black',
            }}>
            <TextInput
              onChangeText={text => handleOnchange(text, 'email')}
              style={{
                height: 55,
                width: '86%',
                color: COLOURS.black,
                fontSize: 14,
              }}
              placeholderTextColor="#000"
              placeholder="Enter Your Email Address"
            />
          </View>

          <View
            style={{
              height: 55,
              backgroundColor: COLOURS.light,
              flexDirection: 'row',
              paddingHorizontal: 15,
              borderWidth: 1,
              width: '86%',
              borderRadius: 5,
              marginBottom: 20,
              borderColor: !inputs.password.match(/^.{5,}$/) ? 'red' : 'black',
            }}>
            <TextInput
              onChangeText={text => handleOnchange(text, 'password')}
              style={{
                height: 55,
                width: '86%',
                color: COLOURS.black,
                fontSize: 14,
              }}
              placeholderTextColor="#000"
              placeholder="Enter Your Password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View
          style={{
            height: '8%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={register}
            disabled={!isFormValid}
            style={{
              width: '86%',
              height: '90%',
              backgroundColor: isFormValid
                ? COLOURS.blue
                : COLOURS.backgroundLight,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
              marginBottom: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                letterSpacing: 1,
                color: COLOURS.white,
              }}>
              SIGN Up
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: COLOURS.black,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Don't have an account ?{'  '}
            </Text>
            <Text
              onPress={() => navigation.navigate('SignIn')}
              style={{
                color: COLOURS.blue,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Sign In
            </Text>
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
};

export default SignUp;
