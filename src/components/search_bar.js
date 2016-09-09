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
    //needs to define render()
    //do NOT make static
    render() {
        return (
            //ES6 syntax, simplified for one arg fct
            <input onChange={event => console.log(event.target.value)
            }/>
        );
    }

    //event handler to know when input's info changes
    //event catches the event, has no type
    //inlined in input tag
}

export default SearchBar;