import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {windowHeight} from '../utils/Dimensions';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    borderRadius: 8, //3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    //  fontFamily: 'Lato-Regular',
  },
});

const FormButton = ({buttonLabel, ...rest}) => {
  return (
    <Pressable style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonLabel}</Text>
    </Pressable>
  );
};

export default FormButton;
