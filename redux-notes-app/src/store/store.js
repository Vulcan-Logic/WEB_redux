import { createStore } from 'redux';
import { mainReducer } from '../reducers/reducers';

let initialState = {
    notes: [
      { title: 'You are awesome', content: 'No, wait, I meant legendary!' },
      { title: 'Ooops', content: 'I was talking to myself' },
    ],
    visibility: 'AWESOME_TAG',
  };
  
export default createStore(
mainReducer,
initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//export default createStore(reducers);