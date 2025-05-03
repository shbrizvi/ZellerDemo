import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'; // Import styles from the new separate styles file

type Props = {
  message?: string;
};

const NoData = ({ message = 'No Records Found' }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default NoData;
