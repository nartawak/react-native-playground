import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppState,
} from 'react-native';
import codePush from 'react-native-code-push';
import AbstractComponent from './ui/components/RNPAbstractComponent';

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
    backgroundColor: AbstractComponent.getTheme().COLORS.BACKGROUND_COLOR,
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

  componentDidMount() {
    const updateDialogOptions = {
      updateTitle: 'Mise à jour disponible',
      optionalUpdateMessage: 'Une mise à jour est disponible. Voulez-vous l\'installer ?',
      optionalIgnoreButtonLabel: 'Non',
      optionalInstallButtonLabel: 'Oui',
    };
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
      updateDialog: updateDialogOptions,
    });

    AppState.addEventListener('change', (newState) => {
      if (newState === 'active') {
        codePush.sync({
          installMode: codePush.InstallMode.IMMEDIATE,
          updateDialog: updateDialogOptions,
        });
      }
    });
  }

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

