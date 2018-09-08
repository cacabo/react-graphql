import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Workshops = () => (
  <Query query={gql`
    {
      workshops {
        title
      }
    }
  `}>
    {({ loading, error, data }) => {
      if (loading) return (<p>Loading...</p>);
      if (error) return (<p>There was an error :(</p>);
      return (<p>We have some data! 🧚‍🐄🍻</p>)
    }}
  </Query>
);

export default Workshops;
