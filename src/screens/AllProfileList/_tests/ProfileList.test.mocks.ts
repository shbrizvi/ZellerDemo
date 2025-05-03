// ProfileList.test.mocks.ts

import { LIST_ZELLER_CUSTOMERS_QUERY } from '../../../apolloClient/queries/queries';
import { mockUsers } from '../../_tests/MockDataList';

export const profileListMocks = [
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS_QUERY,
      variables: {
        limit: 25,
        nextToken: null,
      },
    },
    result: {
      data: {
        listZellerCustomers: {
          items: mockUsers,
          nextToken: null,
        },
      },
    },
  },
];
