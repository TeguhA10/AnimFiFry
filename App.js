
import React, { useState, useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LogBox } from 'react-native';
import { DrawerContent } from './screens/DrawerContent';
import firebase from 'firebase/app';
import "firebase/auth";
import RootStackScreen from './screens/RootStackScreen';
import AnimTab1 from './screens/bottomtab';
import { Provider } from 'react-redux';

import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import aboutscreen from './screens/aboutscreen';
import categoriscreen from './screens/categoriscreen';
import Userscreen from './screens/Userscreen';
import Deskripsi from './screens/Deskripsi';
import mapsscreen from './screens/mapsscreen';
import animeList from './screens/animeList';
import splash from './screens/RootStackScreen';
import action from './screens/kategori/action';
import adventure from './screens/kategori/adventure';
import drama from './screens/kategori/drama';
import mystery from './screens/kategori/mystery';
import romance from './screens/kategori/romance';
import scifi from './screens/kategori/scifi';
import supernatural from './screens/kategori/supernatural';

const Drawer = createDrawerNavigator();

function App() {



  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyB5AV1iZvbbES4fBYP-7H7lP6A7NYoNstI",
    authDomain: "animfifry.firebaseapp.com",
    databaseURL: "https://animfifry-default-rtdb.firebaseio.com",
    projectId: "animfifry",
    storageBucket: "animfifry.appspot.com",
    messagingSenderId: "632958224429",
    appId: "1:632958224429:web:475620e4e97bfd3ce590a4"
  };

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });

  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
    {isLoggedIn ?
      <Drawer.Navigator 
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor:'rgb(32, 203, 255)'},
        headerTitleAlign: 'center',
        headerTitleStyle:{color:'white'}
      }}
      drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={AnimTab1} options={{}}/>
        <Drawer.Screen name="Account" component={Userscreen} options={{headerShown:false}}/>
        <Drawer.Screen name="Kategori" component={categoriscreen} options={{headerShown:true}}/>
        <Drawer.Screen name="AnimeL" component={animeList} options={{headerShown:true,title:'Slice Of Life'}}/>
        <Drawer.Screen name="Deskripsi" component={Deskripsi} options={{headerShown:true}}/>
        <Drawer.Screen name="Mapsscreen" component={mapsscreen} options={{headerShown:true, title:'Maps'}}/>
        <Drawer.Screen name="About" component={aboutscreen} options={{headerShown:true}}/>
        <Drawer.Screen name="Actionl" component={action} options={{headerShown:true, title:'Action'}}/>
        <Drawer.Screen name="Adventurel" component={adventure} options={{headerShown:true, title:'Adventure'}}/>
        <Drawer.Screen name="Dramal" component={drama} options={{headerShown:true, title:'Drama'}}/>
        <Drawer.Screen name="Mysteryl" component={mystery} options={{headerShown:true, title:'Mystery'}}/>
        <Drawer.Screen name="Romancel" component={romance} options={{headerShown:true, title:'Romance'}}/>
        <Drawer.Screen name="Scifil" component={scifi} options={{headerShown:true, title:'Sci-Fi'}}/>
        <Drawer.Screen name="Supernaturall" component={supernatural} options={{headerShown:true, title:'Supernatural'}}/>
      </Drawer.Navigator>:
    <RootStackScreen/>
    }
  </NavigationContainer>
  </PersistGate>
  </Provider>
  );
}

export default App;
