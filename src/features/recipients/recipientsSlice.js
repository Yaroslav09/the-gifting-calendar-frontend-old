import {
  FETCH_RECIPIENTS_BEGIN,
  FETCH_RECIPIENTS_SUCCESS
} from '../../constants/ActionTypes';
import initialState from '../state';


const recipients = function reducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case 'recipients/fetchRecipientsBegin':
      return [
        ...state,
        {
          recipients: [],
          recipientsById: {},
          recipientIds: [],
          isLoading: true
        }
      ];
    case 'recipients/fetchRecipientsSuccess':
      debugger
      return [
        ...state,
        {
          recipients: action.payload.recipients,
          recipientsById: action.payload.recipientsById,
          recipientIds: action.payload.recipientIds,
          isLoading: false
        }
      ];
    default:
      return state;
  }
}

export default recipients

// export const recipientsById = function reducer(
//   state = initialState,
//   action
// ) {
//   switch (action.type) {
//     case 'recipients/fetchRecipientsBegin':
//       return {
//         ...state,
//         recipientsById: {}
//       };
//     case 'recipients/fetchRecipientsSuccess':
//       return {
//         ...state,
//         recipientsById: {}
//       };
//     default:
//       return state;
//   }
// }

// export const recipientIds = function reducer(
//   state = initialState,
//   action
// ) {
//   switch (action.type) {
//     case 'recipients/fetchRecipientsBegin':
//       return {
//         ...state,
//         recipientIds: []
//       };
//       case 'recipients/fetchRecipientsSuccess':
//       return {
//         ...state,
//         // recipientIds: action.payload.map(obj => parseInt(obj.id, 10))
//         recipientIds: []
//       };
//     default:
//       return state;
//   }
// }

// export const isLoading = function reducer(
//   state = initialState,
//   action
// ) {
//   switch (action.type) {
//     case 'recipients/fetchRecipientsBegin':
//       return {
//         ...state,
//         isLoading: true
//       };
//     case 'recipients/fetchRecipientsSuccess':
//       return {
//         ...state,
//         isLoading: false
//       };
//     default:
//       return state;
//   }
// }