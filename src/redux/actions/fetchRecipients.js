import {
  FETCH_RECIPIENTS_BEGIN,
  FETCH_RECIPIENTS_SUCCESS,
  FETCH_RECIPIENTS_FAILURE
} from '../actions/actionTypes';

export function fetchRecipients() {
  return dispatch => {
    dispatch(fetchRecipientsBegin());
    return fetch(`http://localhost:3001/api/recipients`)
      .then(response => response.json())
      .then(({data}) => {
        dispatch(fetchRecipientsSuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchRecipientsFailure(error)));
  }
};

export const fetchRecipientsBegin = () => ({
  type: FETCH_RECIPIENTS_BEGIN
});

export const fetchRecipientsSuccess = data => ({
  type: FETCH_RECIPIENTS_SUCCESS,
  payload: { data }
});

export const fetchRecipientsFailure = error => ({
  type: FETCH_RECIPIENTS_FAILURE,
  payload: { error }
});