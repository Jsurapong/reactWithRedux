import React, { Component } from 'react';

class VideoDetail extends Component {
    render() {
        if (!this.props.video) {
            return <div>Loading...</div>;
        }

        const video = this.props.video;
        const videoID = video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoID}`;
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={url} className="embed-responsive-item" />
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        );
    }
}

export default VideoDetail;
