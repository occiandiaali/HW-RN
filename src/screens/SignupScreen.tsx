import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const styles = StyleSheet.create({
  colour_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    // fontFamily: 'Lato-Regular'
    color: 'grey',
  },
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  text: {
    //  fontFamily: 'Lato-Italic'
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
});

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {register} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create your account</Text>
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
      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword: string) =>
          setConfirmPassword(userPassword)
        }
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonLabel="Sign Up"
        onPress={() => register(email, password)}
      />
      <View style={styles.textPrivate}>
        <Text style={styles.colour_textPrivate}>
          By registering you confirm that you accept our
        </Text>
        <Pressable onPress={() => {}}>
          <Text style={[styles.colour_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </Pressable>
        <Text style={styles.colour_textPrivate}> and </Text>
        <Pressable>
          <Text style={[styles.colour_textPrivate, {color: '#e88832'}]}>
            Privacy Policy
          </Text>
        </Pressable>
      </View>

      <SocialButton
        buttonLabel="Sign Up with Facebook"
        buttonType="facebook"
        colour="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />
      <SocialButton
        buttonLabel="Sign Up with Google"
        buttonType="google"
        colour="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />
      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={styles.navButton}>
        <Text style={styles.navButtonText}>
          Already have an account? Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;
