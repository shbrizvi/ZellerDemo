import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import HomePage from './HomePage';
import {mocks} from './_tests/HomePage.test.mocks';
import {LIST_ZELLER_CUSTOMERS_QUERY} from '../apolloClient/queries/queries';
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }), 
}));
jest.useFakeTimers();

describe('HomePage', () => {

  it('shows loader while fetching data', () => {
    const {getByTestId} = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <HomePage  />
      </MockedProvider>
    );
    expect(getByTestId('loading-spinner')).toBeDefined();
  });

  it('renders Admin users by default', async () => {
    const {getByText, queryByText} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage  />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByText('Alice Johnson')).toBeDefined();
      expect(getByText('Charlie Nguyen')).toBeDefined();
      expect(queryByText('Bob Smith')).toBeNull(); // Manager user should not appear
    });
  });

  it('shows no data message when no users are returned', async () => {
    const emptyMock = [
      {
        request: {
          query: LIST_ZELLER_CUSTOMERS_QUERY,
          variables: {
            filter: {role: {eq: 'ADMIN'}},
            limit: 25,
            nextToken: null,
          },
        },
        result: {
          data: {
            listZellerCustomers: {
              items: [],
            },
          },
        },
      },
    ];

    const {getByText} = render(
      <MockedProvider mocks={emptyMock} addTypename={false}>
        <HomePage  />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByText('No Admin users found.')).toBeDefined();
    });
  });

  it('shows error component when query fails', async () => {
    const errorMock = [
      {
        request: {
          query: LIST_ZELLER_CUSTOMERS_QUERY,
          variables: {
            filter: {role: {eq: 'ADMIN'}},
            limit: 25,
            nextToken: null,
          },
        },
        error: new Error('Something went wrong'),
      },
    ];

    const {getByTestId} = render(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByTestId('error-message')).toBeDefined();
      expect(getByTestId('retry-btn')).toBeDefined();
    });
  });

  it('navigates to ProfileListScreen when button is pressed', async () => {
    const {getByTestId} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage  />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByTestId('check-all-users-button')).toBeDefined();
    });

    fireEvent.press(getByTestId('check-all-users-button'));
    expect(mockNavigate).toHaveBeenCalledWith('ProfileListScreen');
  });
});
