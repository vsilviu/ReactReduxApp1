//ES6 syntax; could have done const Comp = React.Component
//will not be 'read' between {}
import React, {Component} from 'react';

//functional component
//const SearchBar = () => {
//    //needs React import to work
//    return <input />
//};

//class based component
class SearchBar extends Component {
    //called when instantiating
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    //needs to define render()
    //do NOT make static
    render() {
        return (
            //ES6 syntax, simplified for one arg fct
            //controller form element
            //value changes when state changes
            <input onChange={event => {
            //triggers re-rendering
            this.setState({term : event.target.value});
            console.log(this.state.term);
            }}/>
        );
    }

    //event handler to know when input's info changes
    //event catches the event, has no type
    //inlined in input tag
}

export default SearchBar;