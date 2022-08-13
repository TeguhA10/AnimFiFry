import { View, Text, Image, TouchableOpacity, ScrollView, Button, Alert, StyleSheet } from 'react-native'
import React,{ useLayoutEffect, useState, useRef} from 'react';
import BackButton from "../components/BackButton/BackButton";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Deskripsi({route, navigation}) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const [playing, setPlaying] = useState(false);
  const [isMute, setMute] = useState(false);
  const controlRef = useRef();
  const onStateChange = (state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
    if (state !== 'playing') {
      setPlaying(false);
    }
  };

  return (
    <ScrollView>
      <View style={{justifyContent: 'center', flex: 1}}>
      <YoutubePlayer
          webViewStyle={{}}
          height={300}
          ref={controlRef}
          play={playing}
          mute={isMute}
          videoId={route.params.data.vid_url}
          onChangeState={onStateChange}
        />
      </View>
      <View style={{marginLeft:15, marginTop:-65}}>
        <Text>Judul  :  {route.params.data.title}</Text>
        <View style={{flexDirection:'row'}}>
        <Text>Rating : </Text>
        <MaterialCommunityIcons
          color='yellow'
          name='star'
          size={15}
          style={{marginTop:1}}
        />
        <Text> {route.params.data.rating}</Text>
        </View>
        <Text>Studio :  {route.params.data.studio}</Text>
        <Text>Episode :  {route.params.data.epd}</Text>
        <Text>Genre :  {route.params.data.genres}</Text>
      </View>
      <View style={{
        backgroundColor: 'rgb(38, 140, 236)', 
        marginTop:20, height:'100%', 
        padding:10, 
        borderTopRightRadius:35,
        borderTopLeftRadius:35
        }}>
        <Text style={{
          textAlign:'center', 
          fontWeight:'bold', 
          fontSize: 18, 
          marginTop: 10,
          color:'white'
          }}> 
          Synopsis
        </Text>
        <Text style={{
          textAlign:'justify', 
          fontWeight:'bold', 
          fontSize: 18, 
          marginTop: 5,
          padding: 14,
          color:'white',
          }}> 
          {route.params.data.description}
        </Text>
        <TouchableOpacity onPress={() => 
          navigation.navigate('Mapsscreen',{route})
        }>
        <Text style={{  
          backgroundColor:'rgb(32, 203, 255)', 
          width: 130, 
          margin:12, 
          padding:12, 
          borderRadius:20,
          textAlign:'center',
          left: 230,
          bottom: 30,
          color:'white'
          }}>
          Maps Studio
        </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}