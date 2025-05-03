// Description: This file contains the mock data and GraphQL queries for testing the UserList component.
import { LIST_ZELLER_CUSTOMERS_QUERY } from '../../ApolloClient/queries/queries';
import { mockUsers } from './MockDataList';

export const mocks = [
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS_QUERY,
      variables: {
        filter: { role: { eq: 'ADMIN' } },
        limit: 25,
        nextToken: null,
      },
    },
    result: {
      data: {
        listZellerCustomers: {
          items: mockUsers.filter(user => user.role === 'ADMIN'),
          nextToken: null,
        },
      },
    },
  },
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS_QUERY,
      variables: {
        filter: { role: { eq: 'MANAGER' } },
        limit: 25,
        nextToken: null,
      },
    },
    result: {
      data: {
        listZellerCustomers: {
          items: mockUsers.filter(user => user.role === 'MANAGER'),
          nextToken: null,
        },
      },
    },
  },
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS_QUERY,
      variables: {
        filter: {
          or: [
            { name: { contains: 'Test Customer 1' } },
            { email: { contains: 'Test Customer 1' } },
          ],
        },
        limit: 10,
        nextToken: null,
      },
    },
    result: {
      data: {
        listZellerCustomers: {
          items: mockUsers.filter(user =>
            user.name.toLowerCase().includes('test customer 1'.toLowerCase()) ||
            user.email.toLowerCase().includes('test customer 1'.toLowerCase())
          ),
        },
      },
    },
  },
];
