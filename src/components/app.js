import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetails from '../containers/book-detail';

//will only render the main things on screen
export default class App extends Component {
    render() {
        return (
            <div>
                <BookList/>
                <BookDetails/>
            </div>
        );
    }
}
