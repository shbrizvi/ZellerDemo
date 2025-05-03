import {PixelRatio, Dimensions} from 'react-native';

// https://medium.com/nerd-for-tech/react-native-styles-normalization-e8ce77a3110c

const ScreenDimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const screenWidth = ScreenDimensions.width;
const screenHeight = ScreenDimensions.height;

const scaleFactor = 0.9;
const viewPortX = 414 * scaleFactor;
const viewPortY = 896 * scaleFactor;
const widthBaseScale = screenWidth / viewPortX;
const heightBaseScale = screenHeight / viewPortY;
const guidelineBaseHeight = 680;

function normalize(size, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const verticalScale = size => (screenHeight / guidelineBaseHeight) * size;
// for width  pixel
const widthPixel = size => normalize(size, 'width');
// for height  pixel
const heightPixel = size => normalize(size, 'height');
// for font  pixel
const fontPixel = size => heightPixel(size);
// for Margin and Padding vertical pixel
const pixelSizeVertical = size => heightPixel(size);
// for Margin and Padding horizontal pixel
const pixelSizeHorizontal = size => widthPixel(size);
export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  screenWidth,
  screenHeight,
  verticalScale
};
