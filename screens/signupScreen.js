import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";

export default class signupScreen extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('SignInScreen')
      })
      .catch((error) => {
        alert(error.message)
    });   
    }
  }
  stater = {
    icon: "eye",
    password:true
  };
  _changeIcon() {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-off-outline' : 'eye',
      password: !prevState.password
    }));
  }
  render() { 
    return (
      <View style={{backgroundColor:'rgb(32, 203, 255)'}}>
      <Image
          source={require('../assets/AnimFiFry.png')}
          style={{alignSelf:'center', height:150, width:400, position:'absolute', top:7, right:5}}    
      />
      <Image
          source={require('../assets/peeker.png')}
          style={{alignSelf:'center', height:150, width:300, position:'absolute', top:130}}      
      />
      <View style={styles.container}>  
      <Text style={{ fontSize: 30, fontWeight: "800", marginBottom: 10, color:'white' }}>Register</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Username"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />
        <Icon
            style={{left:135, bottom:31}}
            name='account'
            color='#000'
            size={20}
        />      
        <TextInput
          style={styles.inputStyle1}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <Icon
            style={{left:135, bottom:31}}
            name='email'
            color='#000'
            size={20}
        />
        <TextInput
          style={styles.inputStyle1}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={this.stater.password}
        />   
        <Icon
            style={{left:135, bottom:31, marginBottom:-25}}
            name={this.stater.icon} 
            onPress={()=> this._changeIcon}
            color='#000'
            size={20}
        />
        <Btn
          color="#3740FE"
          title="Signup"
          // onPress={() => this.registerUser()}
          onClick={() => this.registerUser()}
        />
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('SignInScreen')}>
          Already Registered? Click here to login
        </Text>                          
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgb(16, 130, 196)', 
    alignItems:'center', 
    marginTop:280, height:'100%', 
    padding:10, 
    borderTopRightRadius:25,
    borderTopLeftRadius:25
  },
  btn: {
    height: 42,
    width: "92%",
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: "#0B3270",
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    width: "90%",
    backgroundColor:'#fff',
    borderColor: "#0B3270",
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 25,
    height: 42,
    marginTop:15
  },
  inputStyle1: {
    width: "90%",
    backgroundColor:'#fff',
    borderColor: "#0B3270",
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 25,
    height: 42,
    marginTop:-7
  },
  loginText: {
    color: 'rgb(188, 217, 255)',
    marginTop: 25,
    textAlign: 'center',
    backgroundColor:'rgba(255, 255, 255, 0)',
    padding:5
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});