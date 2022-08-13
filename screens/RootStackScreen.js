import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Image } from "react-native"
import SignUpScreen from './signupScreen';
import onboarding from './onboarding';
import signinScreen from './signinScreen';
import signupScreen from './signupScreen';

function splash({navigation}) {
    setTimeout(() => {
      navigation.replace('Onoboarding')
    }, 4000);
    return(
      <View style={{backgroundColor:'rgb(32, 203, 255)', height:'100%'}}>
      <Image
      source={require('../assets/violetsplash.png')}
      style={{alignSelf:'center', width: 200, height: 250, marginTop:220}} 
      />
      </View>
    );
  }

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Splashscreen" component={splash}/>
        <RootStack.Screen name="Onoboarding" component={onboarding}/>
        <RootStack.Screen name="SignInScreen" component={signinScreen}/>
        <RootStack.Screen name="SignUpScreen" component={signupScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;