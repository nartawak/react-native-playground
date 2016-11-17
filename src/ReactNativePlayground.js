import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AbstractComponent from './components/AbstractComponent';
import { THEME } from './styles/ReactNativePlayground.theme';

const REACT_NATIVEPLAYGROUND_STYLES = {
  STYLES: {
    COLORS: {
      INSTRUCTIONS: '#333333',
    },
  },
};

/**
 * Component style
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.BACKGROUND_COLOR,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: REACT_NATIVEPLAYGROUND_STYLES.STYLES.COLORS.INSTRUCTIONS,
    marginBottom: 5,
  },
});

/**
 * Application container
 * @constructor
 */
export default class ReactNativePlayground extends AbstractComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/ReactNativePlayground.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}
