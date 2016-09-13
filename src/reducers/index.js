import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBookReducer //will be available as a key on the global state
});

export default rootReducer;
