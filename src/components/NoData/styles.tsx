import { StyleSheet } from 'react-native';
import { fontPixel, pixelSizeVertical } from '../../common/Dimensions';
import { colors } from '../../common/ColorFile';

const styles = StyleSheet.create({
  container: {
    paddingVertical: pixelSizeVertical(40),
    alignItems: 'center',
  },
  text: {
    fontSize: fontPixel(16),
    color: colors.gray,
  },
});

export default styles;
