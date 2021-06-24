import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import recipientReducer from './redux/reducers/recipientsReducer';

const store = createStore(
  recipientReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;