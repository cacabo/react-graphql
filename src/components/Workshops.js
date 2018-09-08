import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Workshops = () => (
  <Query query={gql`
    workshops {
      title
    }
  `}>
    {({ loading, error, data }) => {
      if (loading) return (<p>Loading...</p>);
      if (error) return (<p>There was an error :(</p>);
      return (<p>{data.workshops[0].title}</p>)
    }}
  </Query>
);

export default Workshops;
