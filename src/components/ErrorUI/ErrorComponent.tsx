import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

type Props = {
  message: string;
  onRetry: () => void;
};

const ErrorComponent = ({message = '', onRetry}: Props) => (
  <View style={styles.container}>
    <Text testID="error-title" style={styles.errTxt}>Something went wrong</Text>
    <Text testID="error-message" style={styles.errTxt}>{message}</Text>
    <Text testID="retry-btn" style={styles.retryTxt} onPress={onRetry}>
      Tap to retry
    </Text>
  </View>
);

export default ErrorComponent;
