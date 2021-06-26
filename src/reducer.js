import { combineReducers } from 'redux';
import { recipients, recipientsById, recipientIds, isLoading } from './features/recipients/recipientsSlice';

const recipient = combineReducers({
  recipients,
  recipientsById,
  recipientIds,
  isLoading
});

const rootReducer = combineReducers({
  recipient
})

export default rootReducer;