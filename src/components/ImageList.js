import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
  const { images } = props;
  const mappedImages = images.map(image => <ImageCard key={image.id} image={image} />);

  return <div className="image-list">{mappedImages}</div>;
};

export default ImageList;
