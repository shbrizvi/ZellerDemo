import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {
  ListZellerCustomersData,
  ListZellerCustomersVars,
  ZellerCustomer,
} from '../screens/ZellerUser-types';
import {LIST_ZELLER_CUSTOMERS_QUERY} from '../apolloClient/queries/queries';
import styles from './styles';

import Divider from '../components/Divider/Divider';
import HomeItem from '../components/UserItem/HomeItem';
import Loader from '../components/Loader/Loader';
import ErrorComponent from '../components/ErrorUI/ErrorComponent';
import UserTypes from '../components/UserTypes/UserTypes';
import NoData from '../components/NoData/NoData';
import { useNavigation } from '@react-navigation/native';

export const useDebouncedValue = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const HomePage = () => {
  const [userType, setUserType] = useState('Admin');
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const {data, loading, error, refetch} = useQuery<
    ListZellerCustomersData,
    ListZellerCustomersVars
  >(LIST_ZELLER_CUSTOMERS_QUERY, {
    variables: {
      filter: { role: { eq: userType.toUpperCase() } },
      limit: 25,
      nextToken: null,
    },
  });

  const userData = data?.listZellerCustomers?.items || [];

  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const renderItem = ({item}: {item: ZellerCustomer}) => (
    <HomeItem item={item} />
  );

  if (loading) return <Loader />;
  if (error) return <ErrorComponent message={error.message} onRetry={refetch} />;

  return (
    <View style={styles.container}>
      <UserTypes userType={userType} onPress={setUserType} />
      <Divider />
      <Text style={styles.subtitle}>{userType} Users</Text>
      <FlatList
        testID="flat-list"
        data={userData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={styles.flatListStyle}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListEmptyComponent={
          <NoData message={`No ${userType} users found.`} />
        }
      />
      <TouchableOpacity
        testID="check-all-users-button"
        style={styles.checkAllButton}
        onPress={() => navigation.navigate('ProfileListScreen')}>
        <Text style={styles.buttonText}>Check All Users</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
