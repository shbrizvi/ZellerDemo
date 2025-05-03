import {StyleSheet} from 'react-native';
import { colors } from '../../common/ColorFile';
import { fontPixel, heightPixel, pixelSizeVertical, widthPixel } from '../../common/Dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: pixelSizeVertical(24)
  },
  leftContainer: {
    backgroundColor: colors.lightBlue,
    borderRadius: fontPixel(10),
    width: widthPixel(44),
    height: widthPixel(44),
    marginRight: fontPixel(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowTxt: {
    fontSize: fontPixel(20),
    color: colors.blue,
  },
  headingTxt: {
    fontSize: fontPixel(18), 
    fontWeight: '500',
    color: colors.black,
  },
  subTxt: {
    fontSize: fontPixel(14), 
    marginVertical: fontPixel(2),
    color: colors.gray,
  },
});

export default styles;
