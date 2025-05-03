import { mockData } from './MockData';
import { GET_ZELLER_CUSTOMER_QUERY } from "../../../apolloClient/queries/queries";  

export const mocks = [
  {
    request: {
      query: GET_ZELLER_CUSTOMER_QUERY,
      variables: {id: '1'},
    },
    result: {
      data: {
        getZellerCustomer: mockData,
      },
    },
  },
];