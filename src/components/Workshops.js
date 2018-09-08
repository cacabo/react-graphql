import React from 'react';

// This is a component we import to make queries with GraphQL
import { Query } from 'react-apollo';

// We use this to actually type and format our query
import gql from 'graphql-tag';

const Workshops = () => (
  <Query query={gql`
    {
      hello
    }
  `}>
    {({ loading, error, data }) => {
      if (loading) return (<p>Loading... 😕</p>);
      if (error) return (<p>There was an error 😩</p>);
      return (<p>{data.hello} 🤠</p>)
    }}
  </Query>
);

export default Workshops;
