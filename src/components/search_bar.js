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
            <input />
        );
    }
}

export default SearchBar;