// ProfileList.test.tsx

import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react-native';
import { MockedProvider } from '@apollo/client/testing';
import ProfileListScreen from './ProfileListScreen';
import { profileListMocks } from './_tests/ProfileList.test.mocks';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }), 
}));
jest.useFakeTimers();
describe('ProfileListScreen', () => {
  it('renders loader while loading', async() => {
    const { getByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProfileListScreen />
      </MockedProvider>
    );

    expect(getByTestId('loading-spinner')).toBeDefined();
  });

  it('renders all users after loading', async () => {
    const { findByText } = render(
      <MockedProvider mocks={profileListMocks} addTypename={false}>
        <ProfileListScreen />
      </MockedProvider>
    );
     
    await waitFor(() => {
      expect(findByText('Alice Johnson')).toBeDefined();
      expect(findByText('Bob Smith')).toBeDefined();
      expect(findByText('Charlie Nguyen')).toBeDefined();
    });
  });

  it('displays search input and allows typing', async () => {
    const { getByTestId, getByText } = render(
      <MockedProvider mocks={profileListMocks} addTypename={false}>
        <ProfileListScreen />
      </MockedProvider>
    );

    // Wait for data to load
    await waitFor(() => {
      expect(getByText('Alice Johnson')).toBeVisible();
   //   screen.debug();
    });

    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeVisible();

    fireEvent.changeText(searchInput, 'alice');
    jest.runAllTimers();
    expect(searchInput.props.value).toBe('alice');
  });

  it('filters users by name using search bar', async () => {
    const { getByText, getByTestId, queryByText } = render(
      <MockedProvider mocks={profileListMocks} addTypename={false}>
        <ProfileListScreen />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByText('Alice Johnson')).toBeVisible();
   //   screen.debug();
    });

    const searchInput = getByTestId('search-input');
    fireEvent.changeText(searchInput, 'alice');
    jest.runAllTimers();
    await waitFor(() => {
      expect(getByText('Alice Johnson')).toBeDefined();
      expect(queryByText('Bob Smith')).toBeNull();
    });
  });

  it('shows empty message if no users match search query', async () => {
    const { findByText, getByTestId } = render(
      <MockedProvider mocks={profileListMocks} addTypename={false}>
        <ProfileListScreen />
      </MockedProvider>
    );

    await findByText('Alice Johnson');

    const searchInput = getByTestId('search-input');
    fireEvent.changeText(searchInput, 'nonexistent');

    expect(await findByText('No users found.')).toBeDefined();
  });

  it('shows error component when query fails', async () => {
    const errorMock = [
      {
        request: {
          query: profileListMocks[0].request.query,
          variables: profileListMocks[0].request.variables,
        },
        error: new Error('Failed to fetch'),
      },
    ];

    const { findByText } = render(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <ProfileListScreen />
      </MockedProvider>
    );

    expect(await findByText(/failed to fetch/i)).toBeDefined();
    expect(await findByText(/retry/i)).toBeDefined();
  });
});
