import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AbstractComponent from '../RNPAbstractComponent';

/**
 * Custom component that extends AbstractComponent
 * @class ExtendsComponent
 */
class ExtendsComponent extends AbstractComponent {}

describe('Abstract component', () => {
  it('Should not create AbstractComponent', () => {
    const createAbstractComponent = () => {
      renderer.create(
        <AbstractComponent />
      ).toJSON();
    };
    expect(createAbstractComponent).toThrowError('Can not construct abstract class.');
  });

  it('Should create ExtendsComponent', () => {
    const createAbstractComponent = () => {
      renderer.create(
        <ExtendsComponent />
      ).toJSON();
    };
    expect(createAbstractComponent).toMatchSnapshot();
  });

  it('Should get the application theme', () => {
    expect(AbstractComponent.getTheme()).toBeDefined();
    expect(AbstractComponent.getTheme().COLORS).toBeDefined();
    expect(AbstractComponent.getTheme().COLORS.BACKGROUND_COLOR).toEqual('#F5FCFF');
  });
  
  it('Should get the device width', () => {
    expect(AbstractComponent.getDeviceWidth()).toEqual(375);
  });
  
  it('Should get the device height', () => {
    expect(AbstractComponent.getDeviceHeight()).toEqual(667);
  });
});
