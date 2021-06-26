import { combineReducers } from 'redux';
import recipients from './features/recipients/recipientsSlice';

const recipient = combineReducers({
  recipients
});

const rootReducer = combineReducers({
  recipient
})

export default rootReducer;