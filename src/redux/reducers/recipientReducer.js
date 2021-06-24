const recipientsReducer = function reducer(state = { recipients: 0 }, action) {
  console.log('reducer', state, action);
  switch (action.type) {
    case 'ADD_RECIPIENT':
      return {
        recipients: state.recipients + 1
      }
    case 'REMOVE_RECIPIENT':
      return {
        recipients: state.recipients - 1
      }
    // case 'UPDATE_RECIPIENT':
    //   const foundRecipient = state.recipients.find(recipient => parseInt(recipient.id, 10) === parseInt(action.recipient.id, 10));
    //   const foundRecipientIndex = state.recipients.findIndex(foundRecipient);
      // Remove the found recipient from the state
      // Add the updated recipient (a.k.a. the action.recipient object) at foundRecipientIndex
      // Return recipients
      // ! TODO: UNFINISHED
      // return state;
    default:
      return state;
  }
}

export default recipientsReducer;