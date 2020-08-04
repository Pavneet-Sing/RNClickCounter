/**
 * @author Pavneet Singh
 */

import colors from './colors';
import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lavender,
  },
  bigText: {
    fontSize: 28,
    color: colors.black,
  },
  EightyWidthStyle: {
    width: "80%",
    margin: 10,
  }
});