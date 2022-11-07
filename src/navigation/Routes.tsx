import React, {useContext, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const onAuthStateChanged = value => {
      setUser(value);
      if (initializing) {
        setInitializing(false);
      }
    };
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [setUser, initializing]);

  if (initializing) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        translucent={true}
      />
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
