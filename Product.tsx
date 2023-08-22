import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A5F52',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 0,
    marginTop: 15,
  },
  image: {
    width: 170,
    height: 250,
    margin: 3,
    borderRadius: 20,
    // backgroundColor: '#d2ebef',
    objectFit: 'cover',
    borderWidth: 1,
    borderColor: 'white',
  },
});

const Product = ({navigation}: {navigation: any}) => {
  interface Book {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
  }
  const [booksug, setBookSug] = useState<Book[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading,setIsLoading]= useState(false)
  useEffect(() => {
    setIsLoading(true)
    let apiUrl = 'https://api.itbook.store/1.0/new';

    axios
      .get(apiUrl)
      .then(response => {
        const newBooks: Book[] = response.data.books;
        const newSug: Book[] = response.data.books.slice(3, 6);
        setBooks(newBooks);
        setBookSug(newSug);
        setIsLoading(false)
      })
      .catch(e => {
        console.warn('error', e);
        setIsLoading(false)
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView persistentScrollbar={false}>
        <Text
          style={{
            color: '#e2fcf8',
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 10,
          }}>
          Recommended
        </Text>
        <ScrollView horizontal={true} persistentScrollbar={true} style={{margin: 5}}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <View style={{display: 'flex', flexDirection: 'row', gap: 8}}>
              {isLoading && <ActivityIndicator style={{height:220,alignItems:'center'}} size="large" color={'white'} />}
              {!isLoading && books.slice(3, 7).map(book => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Details', {book: book})
                    }>
                    <Image
                      style={{
                        width: 180,
                        height: 220,
                        marginBottom: 1,
                        objectFit: 'fill',
                        borderWidth: 1,
                        // borderColor: 'white',
                        borderRadius: 10,
                      }}
                      source={{uri: book.image}}
                    />
                  </TouchableOpacity>

                );
              })}
            </View>
          </View>
        </ScrollView>
        <Text
          style={{
            color: '#e2fcf8',
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 10,
          }}>
          All Books
        </Text>
        {isLoading && <ActivityIndicator style={{ height:220,alignItems:'center'}} size="large" color={'white'} />}
       {!isLoading&& <FlatList
          data={books}
          numColumns={2}
          renderItem={({item}) => (
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', {book: item})}>
                <View>
                  <View>
                    <Image
                      key={item.isbn13}
                      source={{uri: item.image}}
                      style={styles.image}
                    />
                  </View>
                  <Text
                    style={{
                      width: 160,
                      margin: 5,
                      marginLeft: 10,
                      color: 'white',
                    }}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />}
      </ScrollView>
    </View>
  );
};

export default Product;
