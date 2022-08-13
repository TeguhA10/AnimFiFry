import { View, Text, Image, ImageBackground } from 'react-native'
import React,{useLayoutEffect} from 'react'
import MenuImage from "../components/MenuImage/MenuImage";

export default function aboutscreen({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <MenuImage
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRight: () => <View />,
        });
      }, []);

      const image = { uri: "https://reactjs.org/logo-og.png" };

  return (
    <View style={{flex:1}}>
    <ImageBackground source={image} resizeMode='cover' style={{justifyContent:'center', flex:1}}>
    <View style={{backgroundColor:'rgba(0, 83, 160, 0.329)', height: '33%', bottom:57}}>
    <View style={{alignItems:'center', bottom:120,}}>
      <Image
        style={{width:150,height:150, borderRadius:150}}
        source={ 
          require('../assets/violetsplash.png')
        }
      />
      <Text style={{marginTop: 10, fontWeight:'bold', fontSize:25, color:'white'}}>AnimFiFry</Text>
    </View>
    <View style={{bottom: 120, alignItems:'center'}}>
      <Text style={{textAlign :'center', padding:15, fontSize:20, color:'white'}}>Aplikasi dibuat oleh <Text style={{fontWeight:'bold'}}>Teguh Alfaruqi Jurusan Sistem Informasi Kelas A</Text> Untuk memenuhi tugas mata kuliah Android programming</Text>
    </View>
    </View>
    </ImageBackground>
    </View>
  )
}