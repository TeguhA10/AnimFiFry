import React,{ useLayoutEffect, useState, useRef} from 'react';
import BackButton from "../components/BackButton/BackButton";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button, Pressable } from 'react-native';
import {DevSettings} from 'react-native';

export default function mapsscreen({route,navigation}) {
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
  }, [])
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: route.params.route.params.data.ltt * 1,
    longitude: route.params.route.params.data.lgt * 1, 
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const Region = {
    latitude: route.params.route.params.data.ltt * 1,
    longitude: route.params.route.params.data.lgt * 1, 
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const goRegion = () => {
    //complete this animation in 3 seconds
    mapRef.current.animateToRegion(Region, 3 * 1000);
  };

  
  return (
          <View style={styles.container}>
              <MapView
                provider={PROVIDER_GOOGLE}
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                  latitude: route.params.route.params.data.ltt * 1,
                  longitude: route.params.route.params.data.lgt * 1, 
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                onRegionChangeComplete={(region) => setRegion(region)}
              >
                <Marker
                  coordinate={{
                    latitude: route.params.route.params.data.ltt * 1,
                    longitude: route.params.route.params.data.lgt * 1, 
                  }}
                >
                </Marker>
              </MapView>
          <Pressable style={{backgroundColor:'rgb(32, 203, 255)', marginBottom:120, borderRadius:30}} onPress={() => goRegion()}>
            <Text style={{color:'#fff', padding:10}}>Go To Location</Text>
          </Pressable>
        </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 20,
    backgroundColor: "lightblue",
  },
});