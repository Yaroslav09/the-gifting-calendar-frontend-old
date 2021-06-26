import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipients } from '../actions/fetchRecipients';

class RecipientsIndexContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRecipients());
  }

  render() {
    const { isLoading, recipients } = this.props;

    if (isLoading) {
      return (
        <div>
          <iframe
            src="https://giphy.com/embed/QPQ3xlJhqR1BXl89RG"
            width="480"
            height="400"
            frameBorder="0"
            className="giphy-embed"
            alt="Stanley from The Office"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/QPQ3xlJhqR1BXl89RG">via GIPHY</a>
          </p>
        </div>
      )
    }

    return (
      // Pass data to RecipientsList component
      <ul>
        {recipients.map(({ id, name }) =>
          <li key={id}>Name: {name}</li>
        )}
      </ul>
    )
  }
}

export default connect()(RecipientsIndexContainer);