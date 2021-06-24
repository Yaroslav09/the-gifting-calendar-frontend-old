import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipientsList from '../components/RecipientsList';

class RecipientsIndexContainer extends Component {
  // Fetch all recipients from the backend
  // Pass data to RecipientsList component

  render() {
    return <RecipientsList />
  }
}

export default connect()(RecipientsIndexContainer);