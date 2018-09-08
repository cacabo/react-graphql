import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Loading from './shared/Loading';
import Error from './shared/Error';

// Let's build this out some more
// Doesn't do too much at the moment
class Workshop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.clicked) return;

    this.setState({
      clicked: true,
    });
  }

  render() {
    const {
      title,
      author,
      id,
    } = this.props.workshop;

    const {
      clicked,
    } = this.state;

    return (
      <div>
        <h4>{title}</h4>
        <p>{author}</p>
        {
          clicked ? (
            <Query query={gql`
              {
                workshop(id: ${id}) {
                  description
                  url
                }
              }
            `}>
              {({ loading, error, data }) => {
                if (loading) return (<Loading />);
                if (error) return (<Error />);

                const {
                  description,
                  url,
                } = data.workshop;

                return (
                  <div>
                    <p>{description}</p>
                    <a href={url}>RSVP</a>
                  </div>
                )
              }}
            </Query>
          ) : (
            <div onClick={this.handleClick}>
              Learn more
            </div>
          )
        }
      </div>
    );
  }
}

export default Workshop;
