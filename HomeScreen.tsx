import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Bookmark from './Bookmark';
import Hmscren from './Hmscren';
import {Image} from 'react-native';
import {BackHandler, Alert} from 'react-native';
import {useEffect} from 'react';
import {useAuth0} from 'react-native-auth0';

//I'm going to make changee..........................

const tab = createBottomTabNavigator();

const HomeScreen = ({navigation}: {navigation: any}) => {
  const {user} = useAuth0();
  useEffect(() => {
    const backAction = () => {
      // if (navigation.getState().index) {
      //   return false;
      // }
      // console.warn(navigation.getState().index)
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit?',
        [
          {text: 'Cancel', onPress: () => false, style: 'cancel'},
          {text: 'Exit', onPress: () => BackHandler.exitApp()},
        ],
        {cancelable: true},
      );

      return true; // Prevent default back button behavior
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <tab.Navigator>
      <tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 32, height: 34}}
                source={{
                  uri: 'https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png',
                }}></Image>
            );
          },
        }}
        name="BookApp"
        component={Hmscren}
      />

      <tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 30, height: 28}}
                source={{
                  uri: 'https://cdn3.vectorstock.com/i/1000x1000/27/87/bookmark-icon-in-blue-style-for-any-projects-vector-38472787.jpg',
                }}></Image>
            );
          },
        }}
        name="Bookmark"
        component={Bookmark}
      />

      <tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 30, height: 28, borderRadius: 15}}
                source={{
                  uri: user?.picture,
                }}></Image>
            );
          },
        }}
        name="Profile"
        component={Profile}
      />
    </tab.Navigator>
  );
};

export default HomeScreen;
