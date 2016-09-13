import React, {Component} from 'react';
import {connect} from 'react-redux';

//REMEMBER: when creating a container, DO NOT
//export the component! export the connect function!
class BookDetails extends Component {
    render() {

        if (!this.props.book) {
            return <div>Select a book :)</div>
        }

        return (
            <div>
                <h3> Details for: </h3>
                <div>Title: {this.props.book.title}</div>
                <div>Nr of pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetails);