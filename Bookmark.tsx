import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement} from './bookSlice';
import {Alert} from 'react-native';

const Bookmark = () => {
  const item = useSelector((state: any) => state.book.value);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleRemove = (book: any) => {
    Alert.alert(
      'Remove Book',
      `Are you sure you want to remove ${book.title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            dispatch(decrement(book));
          },
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <View>
      <ScrollView style={{backgroundColor: '#0A5F52 '}}>
        {item.length === 0 && (
          <View
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              gap: 20,
              backgroundColor: '#0A5F52',
            }}>
            <Image
              style={{width: 100, height: 100, marginTop: '80%'}}
              source={{
                uri: `https://cdn-icons-png.flaticon.com/512/1174/1174484.png`,
              }}></Image>
            <Text style={{color: '#e2fcf8', fontWeight: 'bold'}}>
              Nothing to display
            </Text>
          </View>
        )}
        <View
          style={{
            display: 'flex',
            gap: 50,
            height: 700,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {item.map((book: any) => {
            return (
              <View
                style={{display: 'flex', alignItems: 'center', gap: 10}}
                key={item.id}>
                <Image
                  style={{width: 200, height: 200}}
                  source={{uri: book.image}}
                />
                <Text style={{color: '#e2fcf8'}}>{book.title}</Text>
                <Button
                  title="Remove"
                  onPress={() => handleRemove(book)}></Button>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Bookmark;
