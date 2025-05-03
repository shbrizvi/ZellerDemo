import Constants from './Constants';

export function debugLog() {
  if (!Constants.DEBUG) {
    return;
  }
  console.log(...arguments);
}
