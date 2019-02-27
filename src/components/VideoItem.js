import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="ui segment items" onClick={() => onVideoSelect(video)}>
      <div className="item">
        <a className="ui tiny image">
          <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
        </a>
        <div className="content">
          <a className="header">{video.snippet.title}</a>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
