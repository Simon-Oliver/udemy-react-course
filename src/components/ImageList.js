import React from 'react';

const ImageList = props => {
  const { images } = props;
  const mappedImages = images.map(image => (
    <img key={image.id} src={image.urls.small} alt={image.description} />
  ));

  return <div>{mappedImages}</div>;
};

export default ImageList;
