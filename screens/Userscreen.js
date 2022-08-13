// components/dashboard.js
import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import firebase from 'firebase/app';
import "firebase/auth";
import { Box, NativeBaseProvider, Pressable, HStack, Icon } from 'native-base';

export default class Userscreen extends Component {

  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }
  
  render() {
    this.state = { 
      email:  firebase.auth().currentUser.email,
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    } 
    const image = require('../assets/animestart.gif');   
    return (
      <NativeBaseProvider>
        <View style={{flex:1}}>
          <ImageBackground
          source={image} 
          resizeMode='cover' 
          style={{justifyContent:'center', flex:1}}
          >
        <View style={styles.container}>
          <View style={{marginTop: 15}}>
            <Pressable style={{marginBottom:10}} p={2} shadow={1} rounded={8} bg={"white"}>
              <HStack justifyContent={"space-between"} alignItems={"center"}>
                <Icon as={Ionicons} name={"person"} size={6} />
                <Text>{this.state.displayName}</Text>
              </HStack>
            </Pressable>
            <Pressable style={{marginBottom:10}} p={2} shadow={1} rounded={8} bg={"white"}>
              <HStack justifyContent={"space-between"} alignItems={"center"}>
                <Icon as={Ionicons} name={"mail"} size={6} />
                <Text>{this.state.email}</Text>
              </HStack>
            </Pressable>
            <Pressable p={2} shadow={1} rounded={8} bg={"white"}>
              <HStack justifyContent={"space-between"} alignItems={"center"}>
                <Text style={{marginLeft:125}}>AnimFiFry</Text>
                <Icon as={Ionicons} name={"arrow-forward-sharp"} size={6} />
              </HStack>
            </Pressable>
          </View>
        </View>
        </ImageBackground>
        </View>
      </NativeBaseProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding: 35,
  },
  textStyle: {
    fontSize: 20,
    marginBottom: 20
  }
});