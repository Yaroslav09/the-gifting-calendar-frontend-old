import {
  FETCH_RECIPIENTS_BEGIN,
  FETCH_RECIPIENTS_SUCCESS
} from '../constants/ActionTypes';

export function fetchRecipients() {
  return dispatch => {
    dispatch(fetchRecipientsBegin());
    return fetch(`http://localhost:3001/api/recipients`)
      .then(response => response.json())
      .then(json => {
        debugger
        dispatch(fetchRecipientsSuccess(json));
        return json;
      })
  }
};

export const fetchRecipientsBegin = () => ({
  type: 'recipients/fetchRecipientsBegin'
});

export const fetchRecipientsSuccess = json => ({
  type: 'recipients/fetchRecipientsSuccess',
  payload: json.data
});