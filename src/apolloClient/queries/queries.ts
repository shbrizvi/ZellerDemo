import { gql } from "@apollo/client";


// Queries for Zeller customers list
export const GET_ZELLER_CUSTOMER_QUERY = gql`
  query GetZellerCustomer($id: String!) {
    getZellerCustomer(id: $id) {
      id
      name
      email
      role
    }
  }
`;


// Queries for Zeller customers
//       limit: 25,
//       nextToken: null,
export const LIST_ZELLER_CUSTOMERS_QUERY = gql`
  query ListZellerCustomers(
    $filter: TableZellerCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZellerCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        role
      }
      nextToken
    }
  }
`;
