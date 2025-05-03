import React, { use, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import client from './src/apolloClient/apolloClient';
import RouteManager from './src/navigation/RouteManager'; 
import { Platform, SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { colors } from './src/common/ColorFile';



export default function App() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    console.log('App mounted');
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ApolloProvider client={client}>
      <SafeAreaView style={{ flex: 1 }}>
       <StatusBar backgroundColor={colors.background} barStyle={Platform.OS === 'ios' ? colorScheme ===    'dark' ? 'light-content' : "dark-content" : 'dark-content'} />
          <NavigationContainer>
            <RouteManager />
          </NavigationContainer>
        </SafeAreaView>
      </ApolloProvider>
    </GestureHandlerRootView>
  );
}
