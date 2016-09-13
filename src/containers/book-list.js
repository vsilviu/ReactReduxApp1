import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index'; //the action creator
import {bindActionCreators} from 'redux'; //sends action to all reducers

//this will be a container (smart vs dumb component)
//it will be aware of the state contained in redux
//important to know how to map state with containers
//react & redux are separated; the logic stands in
//a lib called react-redux
class BookList extends Component {

    renderList() {
        return this.props.books.map(book => {
            return (
                <li key={book.title}
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}>
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

//anthing returnd here will end up as props on the BookList
//container
//so...selectBook action will be available by this.props!
//(left name)
function mapDispatchToProps(dispatch) {
    //the code for dispatching action to all reducers
    //when we call selectBook action creator!
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//how to create a container
//the container needs to know about the new dispatchMethod
//we will make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);