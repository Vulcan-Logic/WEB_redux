import { ADD_NOTE, REMOVE_NOTE } from '../actions/actions';

import notesReducer from './notesReducer';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

 const mainReducer = combineReducers({
  notes: notesReducer,
  visibility: visibilityFilter
});

 
const initialState = {
    notes: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return {
                notes: [
                    ...state.notes,
                    {
                        title: action.title,
                        content: action.content,
                    },
                ],
            };
        case REMOVE_NOTE:
            return {
                notes: state.notes.filter((note, index) => index != action.id)
            };
        default:
            return state;
    }
}


export {mainReducer,rootReducer};
