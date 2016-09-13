import React, { Component } from 'react';

import BookList from '../containers/book-list';

//will only render the main things on screen
export default class App extends Component {
    render() {
        return (
            <div>
                <BookList/>
            </div>
        );
    }
}
