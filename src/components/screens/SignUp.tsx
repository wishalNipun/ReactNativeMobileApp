import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';
import {COLOURS} from '../database/Database';

const SignUp = ({navigation}: any) => {
  return (
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
      <View style={{alignItems: 'center', marginTop: 70}}>
        <Text
          style={{
            color: COLOURS.blue,
            fontSize: 40,
            fontWeight: '800',
            fontFamily: 'roboto',
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
            borderWidth: 0.5,
            width: '86%',
            borderRadius: 5,
            marginBottom: 10,
          }}>
          <TextInput
            style={{
              height: 55,
              width: '86%',
              color: COLOURS.black,
              fontSize: 14,
            }}
            placeholderTextColor="#000"
            placeholder="Name"
          />
        </View>
        <View
          style={{
            height: 55,
            backgroundColor: COLOURS.light,
            flexDirection: 'row',
            paddingHorizontal: 15,
            borderWidth: 0.5,
            width: '86%',
            borderRadius: 5,
            marginBottom: 10,
          }}>
          <TextInput
            style={{
              height: 55,
              width: '86%',
              color: COLOURS.black,
              fontSize: 14,
            }}
            placeholderTextColor="#000"
            placeholder="Phone Number"
          />
        </View>
        <View
          style={{
            height: 55,
            backgroundColor: COLOURS.light,
            flexDirection: 'row',
            paddingHorizontal: 15,
            borderWidth: 0.5,
            width: '86%',
            borderRadius: 5,
            marginBottom: 10,
          }}>
          <TextInput
            style={{
              height: 55,
              width: '86%',
              color: COLOURS.black,
              fontSize: 14,
            }}
            placeholderTextColor="#000"
            placeholder="Email"
          />
        </View>

        <View
          style={{
            height: 55,
            backgroundColor: COLOURS.light,
            flexDirection: 'row',
            paddingHorizontal: 15,
            borderWidth: 0.5,
            width: '86%',
            borderRadius: 5,
            marginBottom: 20,
          }}>
          <TextInput
            style={{
              height: 55,
              width: '86%',
              color: COLOURS.black,
              fontSize: 14,
            }}
            placeholderTextColor="#000"
            placeholder="Password"
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
          onPress={() => navigation.navigate('Home')}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: COLOURS.blue,
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
  );
};

export default SignUp;
