import {ApolloClient, InMemoryCache} from '@apollo/client';
import awsconfig from './awsConfig/aws-exports';

const client = new ApolloClient({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
  headers: {
    'x-api-key': awsconfig.aws_appsync_apiKey,
  },
  cache: new InMemoryCache(),
});

export default client;
