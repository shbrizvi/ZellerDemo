import {StyleSheet} from 'react-native';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../common/Dimensions';
import { colors } from '../../common/ColorFile';

const styles = StyleSheet.create({
 
  heading: {
    fontSize:fontPixel(22), 
    fontWeight: 'bold', 
    marginBottom:heightPixel(15)
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: pixelSizeVertical(5),
    paddingVertical: pixelSizeVertical(12),
    paddingHorizontal:pixelSizeHorizontal(12),
    borderRadius: fontPixel(8),
    backgroundColor: colors.transparent,
  },
  fillRadioBtn: {
    backgroundColor: colors.lightBlue,
  },
  outerCircle: {
    height: widthPixel(24),
    width: widthPixel(24),
    borderRadius: widthPixel(15),
    borderWidth: widthPixel(2),
    borderColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: fontPixel(10),
  },
  innerCircle: {
    height: widthPixel(14),
    width: widthPixel(14),
    borderRadius: widthPixel(7),
    backgroundColor: colors.secondary,
  },
  circleBorder: {
    borderColor: colors.secondary,
  },
  radioText: {
    fontSize: fontPixel(18),
  },
});

export default styles;
