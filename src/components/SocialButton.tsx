import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowHeight} from '../utils/Dimensions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    // fontFamily: 'Lato-Regular',
  },
  buttonTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SocialButton = ({
  buttonLabel,
  buttonType,
  backgroundColor,
  colour,
  ...rest
}) => {
  let bgColour = backgroundColor;
  return (
    <Pressable
      style={[styles.buttonContainer, {backgroundColor: bgColour}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome
          style={styles.icon}
          name={buttonType}
          size={22}
          color={colour}
        />
      </View>
      <View style={styles.buttonTextWrapper}>
        <Text style={[styles.buttonText, {color: colour}]}>{buttonLabel}</Text>
      </View>
    </Pressable>
  );
};

export default SocialButton;
