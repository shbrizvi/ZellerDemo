import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type UserTypeProps = {
  userType: string;
  onPress: (value: string) => void;
};

export enum UserType {
  Admin = 'Admin',
  Manager = 'Manager',
}

const UserTypes = ({userType,onPress}: UserTypeProps) => {
  const isAdmin = userType === UserType.Admin;
  const isManager = userType === UserType.Manager;

  return (
    <View >
      <Text style={styles.heading}>User Types</Text>
       <TouchableOpacity
            onPress={() => onPress(UserType.Admin)}
            style={[styles.radioButton, isAdmin && styles.fillRadioBtn]}>
            <View style={[styles.outerCircle, isAdmin && styles.circleBorder]}>
              {isAdmin && <View style={styles.innerCircle} />}
            </View>
            <Text style={styles.radioText}>Admin</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onPress(UserType.Manager)}
            style={[styles.radioButton, isManager && styles.fillRadioBtn]}>
            <View style={[styles.outerCircle, isManager && styles.circleBorder]}>
              {isManager && <View style={styles.innerCircle} />}
            </View>
            <Text style={styles.radioText}>Manager</Text>
          </TouchableOpacity>

    </View>
  );
};

export default UserTypes;
