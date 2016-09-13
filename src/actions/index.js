export function selectBook(book) {
    // selectBook is an action creator; it returns
    // an action as an JS object with a type property
    // action has type & payload (information about the action)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}