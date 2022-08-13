import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import TextBox from "../components/TextBox";
import Btn from "../components/Btn";
import firebase from "firebase/app";
import "firebase/auth";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function signinScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      height: 42,
      width: "92%",
      borderRadius: 25,
      marginTop: 20,
    },
    textInput: {
      width: "90%",
      borderColor: "#0B3270",
      borderWidth: 1,
      paddingLeft: 15,
      borderRadius: 25,
      height: 42,
      marginTop: 15,
      backgroundColor: "#fff",
    },
    textInput1: {
      width: "90%",
      borderColor: "#0B3270",
      borderWidth: 1,
      paddingLeft: 15,
      borderRadius: 25,
      height: 42,
      backgroundColor: "#fff",
    },
    loginText: {
      color: "rgb(188, 217, 255)",
      marginTop: 25,
      textAlign: "center",
      backgroundColor: "rgba(255, 255, 255, 0)",
      padding: 5,
    },
  });

  const [values, setValues] = useState({
    email: "",
    password: "",
    secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setValues({
      ...values,
      secureTextEntry: !values.secureTextEntry,
    });
  };

  function handleChange(text, eventName) {
    setValues((prev) => {
      return {
        ...prev,
        [eventName]: text,
      };
    });
  }

  function Login() {
    const { email, password } = values;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <View style={{ backgroundColor: "rgb(32, 203, 255)" }}>
      <Image
        source={require("../assets/AnimFiFry.png")}
        style={{
          alignSelf: "center",
          height: 150,
          width: 400,
          position: "absolute",
          top: 7,
          right: 5,
        }}
      />
      <Image
        source={require("../assets/peeker.png")}
        style={{
          alignSelf: "center",
          height: 150,
          width: 300,
          position: "absolute",
          top: 130,
        }}
      />
      <View
        style={{
          backgroundColor: "rgb(16, 130, 196)",
          alignItems: "center",
          marginTop: 280,
          height: "100%",
          padding: 10,
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "800",
            marginBottom: 10,
            color: "white",
          }}
        >
          Login
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email Address"
          onChangeText={(text) => handleChange(text, "email")}
        />
        <Icon
          style={{ left: 135, bottom: 31 }}
          name="account"
          color="#000"
          size={20}
        />
        <TextInput
          style={styles.textInput1}
          placeholder="Password"
          onChangeText={(text) => handleChange(text, "password")}
          secureTextEntry={values.secureTextEntry ? true : false}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {values.secureTextEntry ? (
            <Icon
              style={{ left: 135, bottom: 31 }}
              name="eye"
              color="#000"
              size={20}
            />
          ) : (
            <Icon
              style={{ left: 135, bottom: 31 }}
              name="eye-off-outline"
              color="#000"
              size={20}
            />
          )}
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
            marginTop: -25,
          }}
        >
          <Btn
            onClick={() => Login()}
            title="Login"
            style={{ width: "100%", marginBottom: -10 }}
          />
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            Already Registered? Click here to Register
          </Text>
        </View>
      </View>
    </View>
  );
}
