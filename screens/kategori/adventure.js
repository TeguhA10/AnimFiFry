
import React, {useState, useEffect, useLayoutEffect} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, addBookmark, removeBookmark } from '../../redux/actions';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import BackButton from "../../components/BackButton/BackButton";
 
const animeList = (props) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const { navigation } = props;

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


 
  useEffect(() => {
    fetch('https://62b05551b0a980a2ef509677.mockapi.io/AnimFri?kategory=Adventure')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
 
  const ItemView = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Deskripsi',{data:item}) }> 
      <View style={{ marginVertical: 12}}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <Image
            source={{ uri: item.image_url }}
            resizeMode='cover'
            style={{ width: 100, height: 150, borderRadius: 10, marginLeft:12 }}
          />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <View>
              <Text style={{ fontSize: 22, paddingRight: 16, color: 'white' }}>
                {item.title}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  flexDirection: 'row',
                  padding: 2,
                  backgroundColor: '#2D3038',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40
              }}
                onPress={() =>
                  ifExists(item) ? handleRemoveBookmark(item) : handleAddBookmark(item)
                }
              >
            <MaterialCommunityIcons
                color={ifExists(item) ? '#3AB0FF' : '#F9F9F9'}
                size={24}
                name={ifExists(item) ? 'bookmark' : 'bookmark'}
              />
              </TouchableOpacity>
              <MaterialCommunityIcons
                color='yellow'
                name='star'
                size={20}
                style={{ paddingLeft: 16 }}
              />
              <Text style={{ fontSize: 14, paddingLeft: 10, color: 'white' }}>
                {item.rating}
              </Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    );
  };

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

 
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#1E1B26',
        }}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1E1B26'}}>
      <View style={styles.container}>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(38, 140, 236)'
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});
 
export default animeList;
