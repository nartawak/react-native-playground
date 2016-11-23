/**
 * Jest mock native dependencies
 */
// jest
//   .mock('react-native-video', () => 'Video');

/**
 * Mocking the global.fetch included in React Native
 */
global.fetch = jest.fn();

/**
 * Helper to mock a success response (only once)
 * @param body {Object}
 */
global.fetch.mockResponseSuccess = (body = {}) => {
  global.fetch.mockImplementationOnce(
    () => Promise.resolve({ json: () => Promise.resolve(body) })
  );
};

// Helper to mock a failure response (only once)
global.fetch.mockResponseFailure = (error) => {
  global.fetch.mockImplementationOnce(
    () => Promise.reject(error)
  );
};
