
/**
 * Is the ReactNative release mode ?
 * https://github.com/facebook/react-native/tree/master/packager#pathtomodulenamemapbundle-query-params
 * return {Boolean}
 */
// eslint-disable-next-line arrow-body-style
const isReactNativeReleaseMode = () => {
  // eslint-disable-next-line no-undef
  return !__DEV__;
};

export default class LogHelper {
  /**
   * Log info
   * @param message
   * @param obj
   */
  static logInfo(message, ...obj) {
    if (!isReactNativeReleaseMode()) {
      // eslint-disable-next-line no-console
      console.log(message, ...obj);
    }
  }

  /**
   * Log Warn
   * @param message
   * @param obj
   */
  static logWarn(message, ...obj) {
    if (!isReactNativeReleaseMode()) {
      // eslint-disable-next-line no-console
      console.warn(message, ...obj);
    }
  }

  /**
   * Log error
   * @param message
   * @param obj
   */
  static logError(message, ...obj) {
    if (!isReactNativeReleaseMode()) {
      // eslint-disable-next-line no-console
      console.error(message, ...obj);
    }
  }
}
