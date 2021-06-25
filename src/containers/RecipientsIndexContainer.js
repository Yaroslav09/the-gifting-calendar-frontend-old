import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipients } from '../redux/actions/fetchRecipients';

class RecipientsIndexContainer extends Component {
  componentDidMount() {
    this.props.fetchRecipients();
  }

  render() {
    const { error, loading, recipients } = this.props;

    if (error) {
      return <div>Error! {error.message} ...and now the cage of doom squirrels was opened.</div>
    }

    if (loading) {
      return <div><iframe src="https://giphy.com/embed/QPQ3xlJhqR1BXl89RG" width="480" height="400" frameBorder="0" className="giphy-embed" alt="Stanley from The Office" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/QPQ3xlJhqR1BXl89RG">via GIPHY</a></p></div>
    }

    return (
      // Pass data to RecipientsList component
      <ul>
        {recipients.map(recipient =>
          <li key={recipient.id}>{recipient.name}</li>
        )}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  recipients: state.recipients.recipients,
  loading: state.recipients.loading,
  error: state.recipients.error
});

export default connect(mapStateToProps, { fetchRecipients })(RecipientsIndexContainer);