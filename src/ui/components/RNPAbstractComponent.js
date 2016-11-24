import { Component } from 'react';
import { THEME } from '../styles/ReactNativePlayground.theme';
import DeviceHelper from '../../business/helpers/DeviceHelper';
import LogHelper from '../../business/helpers/LogHelper';

export default class RNPAbstractComponent extends Component {
  /**
   * Get the ReactNativePlayground Theme
   * @return {Object}
   */
  static getTheme() {
    return THEME;
  }

  /**
   * Get the device width
   * @return {*}
   */
  static getDeviceWidth() {
    return DeviceHelper.getWidth();
  }

  /**
   * Get the device height
   * @return {*}
   */
  static getDeviceHeight() {
    return DeviceHelper.getHeight();
  }

  /**
   * Is Android platform ?
   * @return {boolean}
   */
  static isAndroidPlatform() {
    return DeviceHelper.isAndroid();
  }

  /**
   * Is iOS platform ?
   * @return {boolean}
   */
  static isIosPlatform() {
    return DeviceHelper.isIos();
  }

  /**
   * Log info
   * @param message
   * @param obj
   */
  static logInfo(message, ...obj) {
    LogHelper.logInfo(message, ...obj);
  }

  /**
   * Log warn
   * @param message
   * @param obj
   */
  static logWarn(message, ...obj) {
    LogHelper.logWarn(message, ...obj);
  }

  /**
   * Log error
   * @param message
   * @param obj
   */
  static logError(message, ...obj) {
    LogHelper.logError(message, ...obj);
  }

  /**
   * Constructor
   * @param props
   */
  constructor(props) {
    super(props);

    if (this.constructor === RNPAbstractComponent) {
      throw new TypeError('Can not construct abstract class.');
    }
  }
}
