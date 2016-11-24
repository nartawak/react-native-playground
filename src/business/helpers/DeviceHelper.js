import { Platform, Dimensions } from 'react-native';

export default class DeviceHelper {
  /**
   * Is android platform ?
   * @returns {boolean}
   */
  static isAndroid() {
    return Platform.OS === 'android';
  }

  /**
   * Is ios platform ?
   * @returns {boolean}
   */
  static isIos() {
    return Platform.OS === 'ios';
  }

  /**
   * Is smartphone (eg Ipad, ..)
   *
   * @returns {boolean}
   */
  static isSmartPhone() {
    // TODO : Implements this function
    throw new Error('Not yet implemented');
  }

  /**
   * Is tablet (eg Ipad, ..)
   *
   * @returns {boolean}
   */
  static isTablet() {
    // TODO : Implements this function
    throw new Error('Not yet implemented');
  }

  /**
   * Get the device window width
   * @returns {*}
   */
  static getWidth() {
    return Dimensions.get('window').width;
  }

  /**
   * Get the device window height
   * @returns {*}
   */
  static getHeight() {
    return Dimensions.get('window').height;
  }
}
