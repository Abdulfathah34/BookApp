import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';

const Profile = () => {
  const navigation = useNavigation<any>();
  const {clearSession, user} = useAuth0();

  const onLogout = async () => {
    try {
      await clearSession();
      navigation.navigate('login');
    } catch (e) {
      console.log('Log out cancelled');
    }
  };
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: 100,
        gap: 10,
        backgroundColor: '#0A5F52',
        width: '100%',
        height: '100%',
      }}>
      {user && (
        <Image
          source={{uri: user.picture}}
          style={{width: 200, height: 200, borderRadius: 100}}
        />
      )}
      {user && (
        <Text style={{color: '#e2fcf8', fontWeight: 'bold'}}>{user.name}</Text>
      )}
      {user && (
        <Text style={{color: '#e2fcf8', fontWeight: 'bold'}}>{user.email}</Text>
      )}
      <Button title={'Logout'} onPress={onLogout}></Button>
    </View>
  );
};

export default Profile;
