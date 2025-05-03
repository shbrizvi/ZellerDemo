import React from 'react';
import {View, StyleSheet} from 'react-native';
import { colors } from '../../common/ColorFile';
import { heightPixel } from '../../common/Dimensions';

const Divider = () => {
  return (
    <View
      style={[
        styles.divider,
        {
          marginTop: heightPixel(30),
          marginBottom: heightPixel(15),
          backgroundColor: colors.dividerGray,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
  },
});

export default Divider;
