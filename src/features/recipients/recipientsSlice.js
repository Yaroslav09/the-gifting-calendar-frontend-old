import {
  FETCH_RECIPIENTS_BEGIN,
  FETCH_RECIPIENTS_SUCCESS
} from '../../constants/ActionTypes';
import initialState from '../state';


export const recipients = function reducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_RECIPIENTS_BEGIN:
      return {
        ...state,
        recipients: []
      };
    case FETCH_RECIPIENTS_SUCCESS:
      return {
        ...state,
        recipients: []
      };
    default:
      return state;
  }
}

export const recipientsById = function reducer(
  state = initialState,
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

export const recipientIds = function reducer(
  state = initialState,
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

export const isLoading = function reducer(
  state = initialState,
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