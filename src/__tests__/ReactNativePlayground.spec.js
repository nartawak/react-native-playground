import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../ReactNativePlayground';

it('renders ReactNativePLayground application', () => {
  const component = () => {
    renderer.create(
      <App />
    ).toJSON();
  };
  expect(component).toMatchSnapshot();
});
