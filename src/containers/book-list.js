import React, {Component} from 'react';
import {connect} from 'react-redux';

//this will be a container (smart vs dumb component)
//it will be aware of the state contained in redux
//important to know how to map state with containers
//react & redux are separated; the logic stands in
//a lib called react-redux
class BookList extends Component {

    renderList() {
        return this.props.books.map(book => {
            return (
                <li key={book.title} className="list-group-item">
                    {book.title}
                </li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

}

function mapStateToProps(state) {
    //whatever is returned will be inserted as props
    //inside BookList
    return {
        books: state.books //this is the connection
    }
}

//how to create a container
export default connect(mapStateToProps)(BookList);