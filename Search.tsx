import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';
import axios from 'axios';

const Search = () => {
  interface Book {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
  }
 

  const [books, setBooks] = useState<Book[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    let apiUrl = 'https://api.itbook.store/1.0/new';

    axios.get(apiUrl).then(response => {
      const newBooks: Book[] = response.data.books;
      setBooks(newBooks);
    });
  });
  return (
    <View>
      <View style={{backgroundColor:'#0a5f52',}}>
        <TextInput
          value={input}
          onChangeText={text => setInput(text)}
          style={{fontSize: 15,color: '#e2fcf8',backgroundColor:'#e2fcf8'}}
          placeholder="search your book"></TextInput>

        <ScrollView>
          {books.map(item => {
            if (input === '') {
              return (
                <ScrollView style={{marginTop:10}}>
                  <Text style={{fontSize:18,fontWeight:'bold',color: '#e2fcf8'}}>{item.title}</Text>
                  <Text style={{borderColor:'white',borderWidth:1,height:1}}/>
                </ScrollView>
              );
            }
            if (item.title.includes(input)) {
              return (
                <View style={{}}>
                  <Image
                    style={{width: 100, height: 100}}
                    source={{uri: item.image}}
                  />
                  <Text style={{color: '#e2fcf8'}}>{item.title}</Text>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
