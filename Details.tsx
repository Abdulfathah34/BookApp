import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {increment} from './bookSlice';

const Details = ({route}: {route: any}) => {
  const dispatch = useDispatch();
  const handleAdd = (book: any) => {
    dispatch(increment(book));
  };

  interface Bookie {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
    authors: string;
    publisher: string;
    rating: string;
    desc: string;
  }

  const [books, setBooks] = useState<Bookie | null>(null);

  const {book} = route.params;

  useEffect(() => {
    axios
      .get(`https://api.itbook.store/1.0/books/${book.isbn13}`)
      .then(response => {
        setBooks(response.data);
      });
  });
  return (
    <ScrollView style={{backgroundColor: '#0A5F52'}}>
      <View style={styles.container}>
        <Text style={styles.heading}>{book.title}</Text>
        {books?.publisher && (
          <Text style={{color: 'white'}}>Published by {books.publisher}</Text>
        )}
        <Image source={{uri: book.image}} style={styles.image} />
        {books?.authors && (
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Author: {books.authors}
          </Text>
        )}
        <Text style={{color: '#e2fcf8', fontSize: 20, marginBottom: 10}}>
          Price: {book.price}
        </Text>

        <Text
          style={{
            fontSize: 15,
            marginHorizontal: 8,
            color: 'white',
            marginBottom: 10,
          }}>
          Desciption: {book.subtitle}
          {books?.desc}
        </Text>

        <Button title="Add bookmark" onPress={() => handleAdd(book)}></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 350,
    margin: 3,
  },
  heading: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 5,
    fontStyle: 'italic',
  },
});

export default Details;
