import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ART,
} from 'react-native';
import AbstractComponent from './ui/components/RNPAbstractComponent';

const {
  Surface,
  Group,
  Shape,
} = ART;

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
        <Surface width={500} height={500}>
          <Group x={100} y={0}>
            <Shape
              d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
              stroke="#000"
              strokeWidth={1}
            />
          </Group>
        </Surface>
      </View>
    );
  }
}
