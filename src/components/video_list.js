import React from 'react';
import VideoListItem from './video_list_item';

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

    const videoItems = props.videos.map(video => {
        return <VideoListItem key={video.id.videoId} video={video}/>
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;