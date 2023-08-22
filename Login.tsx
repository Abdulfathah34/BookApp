import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 0,
    marginTop: 35,
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 170,
    height: 250,
    margin: 3,
    borderRadius: 20,
    backgroundColor: '#d2ebef',
    objectFit: 'cover',
  },
});

const Login = ({navigation}: {navigation: any}) => {
  const {authorize, user} = useAuth0();
  const onLogin = async () => {
    try {
      await authorize();
      if (user) {
        navigation.navigate('Homescreen');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{width: '100%', height: '100%',}}
        source={{
          uri: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D&w=1000&q=80',
        }}>
        <View style={styles.row}>
          <Image
            style={{width: 200, height: 200, borderRadius: 20,marginBottom:100,marginTop:100}}
            source={{
              uri: 'https://i.pinimg.com/originals/c8/8e/af/c88eafcb687bf6757008cd0bc9ff9200.jpg',
            }}></Image>
        
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={{
              width: 250,
              height: 35,
              paddingVertical: 6,
              borderRadius: 15,
              alignItems: 'center',
              display: 'flex',
              backgroundColor: '#0A5F52',
            }}
            activeOpacity={0.7}
            onPress={() => {
              onLogin();
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={{
              width: 250,
              height: 35,
              paddingVertical: 6,
              borderRadius: 15,
              alignItems: 'center',
              display: 'flex',
              backgroundColor: '#0A5F52',
            }}
            activeOpacity={0.7}
            onPress={() => {
              onLogin();
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
              SIGNUP
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
