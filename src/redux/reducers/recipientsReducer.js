import {
  FETCH_RECIPIENTS_BEGIN,
  FETCH_RECIPIENTS_SUCCESS,
  FETCH_RECIPIENTS_FAILURE
} from '../actions/fetchRecipients';

const initialState = {
  recipients: [],
  loading: false,
  error: null
};

const recipientsReducer = function reducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_RECIPIENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_RECIPIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        recipients: action.payload.data
      };
    case FETCH_RECIPIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        recipients: []
      }
    case 'ADD_RECIPIENT':
      return {
        ...state,
        recipients: [...state.recipients, action.payload]
      }
    case 'REMOVE_RECIPIENT':
      return {
        ...state,
        recipients: state.recipients.filter(
          recipient => parseInt(recipient.id, 10) !== parseInt(action.payload, 10)
        )
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