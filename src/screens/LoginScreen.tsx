import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', //'#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  forgotButton: {
    marginVertical: 55, //35,
    bottom: 28,
  },
  logo: {
    height: 280, //150,
    width: 280, //150,
    // bottom: 30,
    //  resizeMode: 'cover',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    // fontFamily: 'Lato-Regular'
  },
  socialButtonsWrap: {
    bottom: 32,
  },
  text: {
    //  fontFamily: 'Lato-Italic'
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
});

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/helloworld_logo.png')}
      />
      {/* <Text style={styles.text}>and HelloWorld</Text> */}
      <FormInput
        labelValue={email}
        onChangeText={(userEmail: string) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword: string) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonLabel="Sign In"
        onPress={() => login(email, password)}
      />
      <Pressable onPress={() => null} style={styles.forgotButton}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </Pressable>

      <View style={styles.socialButtonsWrap}>
        <SocialButton
          buttonLabel="Sign In with Facebook"
          buttonType="facebook"
          colour="#4867aa"
          backgroundColor="#e6eaf4"
          onPress={() => {}}
        />
        <SocialButton
          buttonLabel="Sign In with Google"
          buttonType="google"
          colour="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => {}}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Signup')}
        style={styles.forgotButton}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
