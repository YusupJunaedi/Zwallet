import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import configureStore from './src/Redux';
import {PersistGate} from 'redux-persist/integration/react';

import Login from './src/Screens/Auth/Login';
import Pin from './src/Screens/Pin/Pin';
import Register from './src/Screens/Auth/Register';
import PinSuccess from './src/Screens/Pin/PinSuccess';
import Home from './src/Screens/Home';
import History from './src/Screens/History';
import Search from './src/Screens/Search';
import InputAmount from './src/Screens/InputAmount';
import PinConfirmation from './src/Screens/Pin/PinConfirmation';

const Stack = createStackNavigator();

const App = () => {
  const {store, persistor} = configureStore();
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Pin" component={Pin} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
