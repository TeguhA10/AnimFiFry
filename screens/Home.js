import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { getBooks, addBookmark, removeBookmark } from '../redux/actions';
import MenuImage from "../components/MenuImage/MenuImage";




export default function Home(props) {

  const [data, setData] = useState();

  const { navigation } = props;

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

    const renderItem = ({ item }) => {

        return (
          
          <TouchableOpacity onPress={() => navigation.navigate('Deskripsi',{data:item}) }>  
            
            <View style={{ marginVertical: 12, marginRight:30 }}>
              <View >
                {/* Book Cover */}
                <Image
                  source={{ uri: item.image_url }}
                  resizeMode='cover'
                  style={{ width: 100, height: 130, borderRadius: 10 }}
                />
                {/* Book Metadata */}
                <View style={{ flex: 1, marginLeft: 2 }}>
                  {/* Book Title */}
                  <View>
                    <Text
                    style={{ fontSize: 13, color: 'white', marginTop: 12, width: 98}}>
                      {/* fdsfsd dsfsdg...  */}
                      {item.title}
                    </Text>
                  </View>
                  {/* Meta info */}
                  <View
                    style={{
                      flexDirection: 'row',
                      position: 'absolute',
                      top: -30,
                      left: 20,
                      alignItems: 'center',
                      backgroundColor: 'rgba(3, 4, 68, 0.493)',
                      width: 78,
                      borderRadius: 5,
                    }}
                  >
                    <MaterialCommunityIcons
                      color='yellow'
                      name='star'
                      size={15}
                      style={{ paddingLeft: -2}}
                    />
                    <Text style={{ fontSize: 12, paddingLeft: 4, color: 'white' }}>
                      {item.rating}
                    </Text>
                  
                    {/* Buttons */}
                    
                    <TouchableOpacity
                    style={{left: 10}}
                    onPress={() =>
                        ifExists(item) ? handleRemoveBookmark(item) : handleAddBookmark(item)
                    }
                    activeOpacity={0.7}
                    >
                    <MaterialCommunityIcons
                        color={ifExists(item) ? '#3AB0FF' : '#F9F9F9'}
                        size={24}
                        name={ifExists(item) ? 'bookmark' : 'bookmark'}
                    />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>       
        );
      };

      
    
    const styles = StyleSheet.create({
      sliderContainer: {
        
        height: 150,
        width: '100%',
        marginBottom: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
      },   
      slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
      },
      sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
      },
    })
    
    const { books, bookmarks } = useSelector(state => state.booksReducer);

    const dispatch = useDispatch();

    const fetchBooks = () => dispatch(getBooks());

    const addToBookmarkList = book => dispatch(addBookmark(book));
    const removeFromBookmarkList = book => dispatch(removeBookmark(book));

    const handleAddBookmark = book => {
    addToBookmarkList(book);
    };

    const handleRemoveBookmark = book => {
    removeFromBookmarkList(book);
    };

    const ifExists = book => {
        if (bookmarks.filter(item => item.id === book.id).length > 0) {
          return true;
        }
      
        return false;
      };


    useEffect(() => {
    fetchBooks();
    }, []);

    return (
        
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(38, 140, 236)', paddingVertical: 75, marginTop:-70}}>
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
            <View style={{ flex: 1, marginTop: 8 }}>
                <View style={styles.sliderContainer}>
                  <Swiper
                    autoplay
                    autoplayTimeout={5}
                    Vertical ={false}
                    height={150}
                    activeDotColor="#FF6347">
                    <View style={styles.slide}>
                      <Image
                        source={require('../assets/swiper1.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                      />
                    </View>
                    <View style={styles.slide}>
                      <Image
                        source={require('../assets/swiper2.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                      />
                    </View>
                    <View style={styles.slide}>
                      <Image
                        source={require('../assets/swiper3.jpg')}
                        resizeMode="cover"
                        style={styles.sliderImage}
                      />
                    </View>
                  </Swiper>
                </View>
              <FlatList
                  data={books}
                  key={'#'}
                  keyExtractor={item => "#" + item.id}
                  renderItem={renderItem}
                  showsVerticalScrollIndicator={false}
                  numColumns={3}
              />
            </View>
        </View>
        </SafeAreaView>
    );

    

}



