import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//youtube api key
const API_KEY = 'AIzaSyAyG6EM34TV8XSOBiEZRVBB5cVH6xapkXw';

//react code for creating a component
//this function is a class
//it can be used in other jsx'es as <App />
const App = () => {
  //jsx to be rendered into html
  return (
      <div>hello

      </div>);
};

//babeljs.io as reference

//tell react dom to what dom node to render
//here, insert in the div with class container
ReactDOM.render(<App />, document.querySelector('.container'));