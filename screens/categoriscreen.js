import { View, Text, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function categoriscreen({navigation}) {
  return (
    <ScrollView>
    <TouchableOpacity onPress={() => navigation.navigate('AnimeL')} style={{ marginTop:7, height: 120}}>
    <ImageBackground style={{height: 120}} source={{ uri: "https://images.alphacoders.com/877/thumb-1920-877032.jpg" }}>
      <Text style={{textAlign:'center', color:'white', marginTop:45}}>Slice Of Life</Text>
    </ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Actionl')} style={{backgroundColor:'rgb(38, 140, 236)', marginTop:7, height: 120}}>
    <ImageBackground style={{height: 120}} source={{ uri: "https://images.alphacoders.com/605/thumb-1920-605592.png" }}>
      <Text style={{textAlign:'center', marginTop:45, color:'white'}}>Action</Text>
    </ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Mysteryl')} style={{backgroundColor:'rgb(38, 140, 236)', marginTop:7, height: 120}}>
    <ImageBackground style={{height: 120}} source={{ uri: "https://images6.alphacoders.com/124/thumb-1920-1247284.png" }}>
      <Text style={{textAlign:'center', marginTop:45, color:'white'}}>Mystery</Text>
    </ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Dramal')} style={{backgroundColor:'rgb(38, 140, 236)', marginTop:7, height: 120}}>
    <ImageBackground style={{height: 120}} source={{ uri: "https://images7.alphacoders.com/100/thumb-1920-1000037.jpg" }}>
      <Text style={{textAlign:'center', marginTop:45, color:'white'}}>Drama</Text>
    </ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Adventurel')} style={{backgroundColor:'rgb(38, 140, 236)', marginTop:7, height: 120}}>
    <ImageBackground style={{height: 120}} source={{ uri: "https://images4.alphacoders.com/106/thumb-1920-1064411.jpg" }}>
      <Text style={{textAlign:'center', marginTop:45, color:'white'}}>Adventure</Text>
    </ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Scifil')} style={{backgroundColor:'rgb(38, 140, 236)', marginTop:7, height: 120}}>
    <ImageBackground style={{height: 120}} source={{ uri: "https://images5.alphacoders.com/345/thumb-1920-345057.jpg" }}>
      <Text style={{textAlign:'center', marginTop:45, color:'white'}}>Sci-Fi</Text>
    </ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Supernaturall')} style={{backgroundColor:'rgb(38, 140, 236)', marginTop:7, height: 120}}>
    <ImageBackground style={{height: 120}} source={{ uri: "https://images7.alphacoders.com/118/thumb-1920-1186080.jpg" }}>
      <Text style={{textAlign:'center', marginTop:45, color:'white'}}>Supernatural</Text>
    </ImageBackground>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Romancel')} style={{backgroundColor:'rgb(38, 140, 236)', marginTop:7, height: 120}}>
    <ImageBackground style={{height: 120}} source={{ uri: "https://images5.alphacoders.com/103/thumb-1920-1032240.jpg" }}>
      <Text style={{textAlign:'center', marginTop:45, color:'white'}}>Romance</Text>
    </ImageBackground>
    </TouchableOpacity>
    </ScrollView>
  )
}