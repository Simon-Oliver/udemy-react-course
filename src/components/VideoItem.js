import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className="ui items segment">
      <div className="item">
        <a className="ui tiny image">
          <img src={video.snippet.thumbnails.medium.url} />
        </a>
        <div className="content">
          <a className="header">{video.snippet.title}</a>
          <div className="description">
            <p>{video.snippet.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
