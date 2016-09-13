//reducers are called when an action happens
//state argument is not application state, but only the
//state this reducer is responsible for
//i.e. it regards only the state defined here
//when an action is triggered, the state is being properly updated
//ES6 syntax: initial values for params
export default function ActiveBookReducer(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state; //if we don't care about the action, don't change the state;
}