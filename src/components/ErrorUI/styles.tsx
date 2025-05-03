import {StyleSheet} from 'react-native';
import { fontPixel, heightPixel } from '../../common/Dimensions';
import { colors } from '../../common/ColorFile';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: fontPixel(20),
  },
  errTitle: {
    fontSize: fontPixel(18),
    color: colors.primary,
    marginBottom: heightPixel(8),
    textAlign: 'center',
  },
  errTxt: {
    fontSize: fontPixel(16),
    color: colors.primary,
    marginBottom: heightPixel(8),
    textAlign: 'center',
  },
  retryTxt: {
    fontSize: fontPixel(16),
    color: colors.blue,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default styles;
