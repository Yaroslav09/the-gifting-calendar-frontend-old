import { combineReducers } from 'redux';
import {
  FETCH_RECIPIENTS_BEGIN,
  FETCH_RECIPIENTS_SUCCESS
} from '../actions/actionTypes';

const recipientsById = function reducer(
  state = { recipientsById: {} },
  action
) {
  switch (action.type) {
    case FETCH_RECIPIENTS_BEGIN:
      return {
        ...state,
        recipientsById: {}
      };
    case FETCH_RECIPIENTS_SUCCESS:
      return {
        ...state,
        recipientsById: {}
      };
    default:
      return state;
  }
}

const recipientIds = function reducer(
  state = { recipientIds: [] },
  action
) {
  switch (action.type) {
    case FETCH_RECIPIENTS_BEGIN:
      return {
        ...state,
        recipientIds: []
      };
      case FETCH_RECIPIENTS_SUCCESS:
      console.log("triggered success", action.payload.data)
      return {
        ...state,
        recipientIds: action.payload.map(obj => parseInt(obj.id, 10))
      };
    default:
      return state;
  }
}

const isLoading = function reducer(
  state = { isLoading: false },
  action
) {
  switch (action.type) {
    case FETCH_RECIPIENTS_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_RECIPIENTS_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}

const recipient = combineReducers({
  recipientsById,
  recipientIds,
  isLoading
});

export default recipient;

// ! MORE RECIPIENT ACTIONS TO BUILD OUT !
// case 'ADD_RECIPIENT':
//   return {
//     ...state,
//     recipients: [...state.recipients, action.payload]
//   }
// case 'REMOVE_RECIPIENT':
//   return {
//     ...state,
//     recipients: state.recipients.filter(
//       recipient => parseInt(recipient.id, 10) !== parseInt(action.payload, 10)
//     )
//   }
// case 'UPDATE_RECIPIENT':
//   const foundRecipient = state.recipients.find(recipient => parseInt(recipient.id, 10) === parseInt(action.recipient.id, 10));
//   const foundRecipientIndex = state.recipients.findIndex(foundRecipient);
  // Remove the found recipient from the state
  // Add the updated recipient (a.k.a. the action.recipient object) at foundRecipientIndex
  // Return recipients
  // ! TODO: UNFINISHED
  // return state;