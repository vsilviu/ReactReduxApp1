//node_modules imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import _ from 'lodash';

//local imports
import VideoDetails from './components/video_detail';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

//youtube api key
const API_KEY = 'AIzaSyAyG6EM34TV8XSOBiEZRVBB5cVH6xapkXw';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            searchTerm: 'surfboards'
        };

        this.videoSearch(this.state.searchTerm);
        //nice ES6 syntax when key=value (videos)
    }

    videoSearch(term) {
        this.setState({searchTerm: term});
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);
        //searchTerm will be set in SearchBar component
        return (
            <div>
                <SearchBar onSearchTerm={videoSearch}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
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
ReactDOM.render(<App />, document.querySelector('.container'));