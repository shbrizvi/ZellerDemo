import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_ZELLER_CUSTOMER_QUERY} from '../../apolloClient/queries/queries';
import { GetZellerCustomerData, GetZellerCustomerVars } from '../Profile/profile-types';
import { debugLog } from '../../common/Logger';
import Loader from '../../components/Loader/Loader';
import ErrorComponent from '../../components/ErrorUI/ErrorComponent';
import { Text, View } from 'react-native';
import styles from './styles';



const ProfileScreen = ({route}: any) => {
  const {id} = route.params;
  debugLog('UserItem+++', 'id = ', id);

  const { data, loading, error, refetch } = useQuery<GetZellerCustomerData, GetZellerCustomerVars>(
    GET_ZELLER_CUSTOMER_QUERY,
    {
      variables: { id },
    }
  );

  const userData = data?.getZellerCustomer;
  

  if (loading) return <Loader />;
  if (error) return <ErrorComponent message={error.message} onRetry={refetch} />;
  if (!userData) return <ErrorComponent message="User not found" onRetry={refetch} />;
  
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text testID="profile-initial" style={styles.avatarText}>{userData.name.charAt(0)}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{userData.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{userData.email}</Text>

        <Text style={styles.label}>Role</Text>
        <Text style={styles.value}>
          {userData.role.charAt(0).toUpperCase() + userData.role.slice(1).toLowerCase()}
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
