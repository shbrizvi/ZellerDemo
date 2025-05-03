import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import ProfileScreen from './ProfileScreen';
import {GET_ZELLER_CUSTOMER_QUERY} from '../../apolloClient/queries/queries';
import {mocks} from './_tests/ProfileScreen.test.mocks';
import {mockData} from './_tests/MockData';

const mockRoute = {
  params: {
    id: '1',
  },
};

describe('ProfileScreen', () => {
  it('shows loading spinner initially', () => {
    const {getByTestId} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProfileScreen route={mockRoute} />
      </MockedProvider>,
    );

    expect(getByTestId('loading-spinner')).toBeDefined();
  });

  it('displays user data correctly after loading', async () => {
    const {getByText, getByTestId} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProfileScreen route={mockRoute} />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(getByTestId('profile-initial')).toBeDefined();
    });

    expect(getByText(mockData.name)).toBeDefined();
    expect(getByText(mockData.email)).toBeDefined();
    expect(getByText('Admin')).toBeDefined(); // Assuming role formatting is done in the component
  });

  it('displays error message when query fails', async () => {
    const errorMocks = [
      {
        request: {
          query: GET_ZELLER_CUSTOMER_QUERY,
          variables: {id: '1'},
        },
        error: new Error('Something went wrong!'),
      },
    ];

    const {getByTestId} = render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ProfileScreen route={mockRoute} />
      </MockedProvider>,
    );

     await waitFor(() => {
          expect(getByTestId('error-message')).toBeDefined();
          expect(getByTestId('retry-btn')).toBeDefined();
      });
  });

  it('attempts to refetch on retry press', async () => {
    const errorMocks = [
      {
        request: {
          query: GET_ZELLER_CUSTOMER_QUERY,
          variables: {id: '1'},
        },
        error: new Error('Network error'),
      },
    ];

    const {getByText} = render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <ProfileScreen route={mockRoute} />
      </MockedProvider>,
    );

    await waitFor(() => {
      const retryText = getByText(/Tap to retry/i);
      expect(retryText).toBeDefined();
      fireEvent.press(retryText);
    });
  });
});
