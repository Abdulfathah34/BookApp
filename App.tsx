import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Login from './Login';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import {store} from './Store';
import {Provider} from 'react-redux';

const stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain={'dev-bg0i4cq5m0vn3jjp.us.auth0.com'}
        clientId={'BAd73zNQ9bNi2G4ssjGtpVLFcAfPEPgM'}>
        <NavigationContainer>
          <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name="login" component={Login} />
            <stack.Screen name="Homescreen" component={HomeScreen} />
          </stack.Navigator>
        </NavigationContainer>
      </Auth0Provider>
    </Provider>
  );
}

export default App;
