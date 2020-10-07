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
import splashScreen from './src/Screens/splashScreen';
import TransferDetail from './src/Screens/TransferDetail';
import Profile from './src/Screens/Profile';
import AllHistory from './src/Screens/AllHistory';
import ChangePin from './src/Screens/Pin/ChangePin';
import ChangePassword from './src/Screens/ChangePassword';
import Confirmation from './src/Screens/Confirmation';

const Stack = createStackNavigator();

const App = () => {
  const {store, persistor} = configureStore();
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Splash" component={splashScreen} />
              <Stack.Screen name="Confirmation" component={Confirmation} />
              <Stack.Screen name="ChangePin" component={ChangePin} />
              <Stack.Screen name="ChangePassword" component={ChangePassword} />
              <Stack.Screen name="HomeApp" component={Home} />
              <Stack.Screen name="AllHistory" component={AllHistory} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="History" component={History} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="TransferDetail" component={TransferDetail} />
              <Stack.Screen
                name="PinConfirmation"
                component={PinConfirmation}
              />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Pin" component={Pin} />
              <Stack.Screen name="PinSuccess" component={PinSuccess} />
              <Stack.Screen name="InputAmount" component={InputAmount} />
            </Stack.Navigator>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
