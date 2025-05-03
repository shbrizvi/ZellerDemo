import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TextInput,
} from 'react-native';
import { useQuery } from '@apollo/client';
import { LIST_ZELLER_CUSTOMERS_QUERY } from '../../apolloClient/queries/queries';
import {
  ListZellerCustomersData,
  ListZellerCustomersVars,
  ZellerCustomer,
} from '../../screens/ZellerUser-types';
import styles from './styles';
import HomeItem from '../../components/UserItem/HomeItem';
import NoData from '../../components/NoData/NoData';
import { useDebouncedValue } from '../HomePage';
import Loader from '../../components/Loader/Loader';
import ErrorComponent from '../../components/ErrorUI/ErrorComponent';

const ProfileListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebouncedValue(searchQuery, 300);
  const [refreshing, setRefreshing] = useState(false);

  const { data, loading, error, refetch } = useQuery<
    ListZellerCustomersData,
    ListZellerCustomersVars
  >(LIST_ZELLER_CUSTOMERS_QUERY, {
    variables: {
      limit: 25,
      nextToken: null,
    },
  });

  const userData = data?.listZellerCustomers?.items || [];

  const filteredData = useMemo(() => {
    const users = userData;
    const query = debouncedQuery.toLowerCase();

    return users.filter(
      user =>
        user.name.toLowerCase().includes(query)
    );
  }, [data, debouncedQuery]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const renderItem = ({ item }: { item: ZellerCustomer }) => (
     <HomeItem item={item} />
  );
  // console.log('filteredData++', filteredData,'isLoading', loading, 'error', error);
  if (loading) return <Loader />;
  if (error) return <ErrorComponent message={error.message} onRetry={refetch} />;

  return (
    <View style={styles.container}>
    <Text style={styles.title}>All Users</Text>
    <TextInput
      testID="search-input"
      style={styles.searchInput}
      placeholder="Search name here..."
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
    <FlatList
      testID="flat-list"
      data={filteredData}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      style={styles.flatListStyle}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      ListEmptyComponent={<NoData message="No users found." />}
    />
  </View>
  );
};
 

export default ProfileListScreen;
