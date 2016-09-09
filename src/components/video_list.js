import React from 'react';

//class VideoList extends Component {
//    render() {
//        return (
//            <ul>
//
//            </ul>
//        );
//    }
//}

//will not have state, so functional
const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
};

export default VideoList;