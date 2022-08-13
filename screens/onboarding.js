import React, { useState } from 'react';
import { Text, View, StyleSheet,Image } from "react-native"
import Onboarding from 'react-native-onboarding-swiper';


const onboarding = ({navigation}) => {
    return (
    <Onboarding
    onSkip={() => navigation.replace("SignInScreen")}
    onDone={() => navigation.replace("SignInScreen")}
    pages={[
        {
        backgroundColor: 'rgb(32, 203, 255)',
        image: <Image style={{width:280, height:260}} source={require('../assets/yuihirasawa.png')} />,
        titleStyles:{color:'black'},
        title: 'Aplikasi AnimFiFry',
        subTitleStyles:{color:'black'},
        subtitle: 'Aplikasi ini berisi list film anime yang sudah di filter oleh admin yang aman untuk di tonton bersama keluarga',
        },
        {
        backgroundColor: 'rgb(43, 153, 0)',
        image: <Image style={{borderRadius:360, width:300, height:290}} source={require('../assets/original.png')} />,
        subTitleStyles:{color:'white'},
        subtitle: 'Nikmati menonton film bersama keluarga tanpa rasa khawatir',
        },
        {
        backgroundColor: 'rgb(2, 0, 112)',
        image: <Image style={{width:300, height: 500, marginRight:55}} source={require('../assets/frameapp.png')} />,
        subTitleStyles:{color:'white', marginTop:-107},
        subtitle: 'Nikmati penggunaan dengan ui yang mudah digunakan',
        },
    ]}
    />
    );
};


export default onboarding;