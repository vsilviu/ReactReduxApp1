//node_modules imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

//local imports
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

//youtube api key
const API_KEY = 'AIzaSyAyG6EM34TV8XSOBiEZRVBB5cVH6xapkXw';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {videos: []};

        //nice ES6 syntax when key=value (videos)
        YTSearch({key: API_KEY, term: 'surfboards'}, videos => this.setState({videos}));
    }

    render() {
        return (
            <div>hello
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

//functional way of creating a component
//const App = () => {
//    //jsx to be rendered into html
//    return (
//        <div>hello
//            <SearchBar />
//        </div>
//    );
//};

//babeljs.io as reference

//tell react dom to what dom node to render
//here, insert in the div with class container
ReactDOM.render(<App />,
    document.querySelector('.container'));