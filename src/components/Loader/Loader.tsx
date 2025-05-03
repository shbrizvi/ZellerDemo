import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
import { colors } from '../../common/ColorFile';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator
      testID="loading-spinner"
      size="large"
      color={colors.blue}
    />
  </View>
);

export default Loader;
