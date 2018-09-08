import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Workshops from './components/Workshops';

import './App.css';

const client = new ApolloClient({
  uri: 'https://0vp11m31k5.lp.gql.zone/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="app">
      <header className="header">
        <h1 className="title">Welcome to React with GraphQL</h1>
      </header>
      <Workshops />
    </div>
  </ApolloProvider>
);

export default App;
