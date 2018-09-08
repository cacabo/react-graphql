import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';

const client = new ApolloClient({
  uri: 'https://0vp11m31k5.lp.gql.zone/graphql',
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React with GraphQL</h1>
      </header>
      <p className="App-intro">
        This should be fun!
      </p>
    </div>
  </ApolloProvider>
);

export default App;
