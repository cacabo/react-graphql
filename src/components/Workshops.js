import React from 'react';

// This is a component we import to make queries with GraphQL
import { Query } from 'react-apollo';

import Workshop from './Workshop';
import Loading from './shared/Loading';
import Error from './shared/Error';

// We use this to actually type and format our query
import gql from 'graphql-tag';

const Workshops = () => (
  <Query query={gql`
    {
      workshops {
        title
        author
        id
      }
    }
  `}>
    {({ loading, error, data }) => {
      if (loading) return (<Loading />);
      if (error) return (<Error />);
      return (
        data.workshops.map(workshop => (
          <Workshop workshop={workshop} key={workshop.id} />
        ))
      )
    }}
  </Query>
);

export default Workshops;
