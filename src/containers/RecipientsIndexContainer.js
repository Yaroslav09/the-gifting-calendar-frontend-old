import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipients } from '../redux/actions/fetchRecipients';

class RecipientsIndexContainer extends Component {
  componentDidMount() {
    this.props.fetchRecipients();
  }

  render() {
    const { loading, recipientIds } = this.props;
    console.log(recipientIds.recipientIds)

    if (loading) {
      return <div><iframe src="https://giphy.com/embed/QPQ3xlJhqR1BXl89RG" width="480" height="400" frameBorder="0" className="giphy-embed" alt="Stanley from The Office" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/QPQ3xlJhqR1BXl89RG">via GIPHY</a></p></div>
    }

    return (
      // Pass data to RecipientsList component
      <ul>
        {recipientIds.map(recipientId =>
          <li key={recipientId}>{recipientId}</li>
        )}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  recipientIds: state.recipient.recipientIds,
  loading: state.recipient.loading
});

export default connect(mapStateToProps, { fetchRecipients })(RecipientsIndexContainer);