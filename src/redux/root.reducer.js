import {combineReducers} from 'redux';

import {formReducer} from "./form/form.reducer";
import {listReducer} from "./list/list.reducer";


const rootReducer = combineReducers({
    notes: formReducer,
    editNote: listReducer,
});

export default rootReducer;
