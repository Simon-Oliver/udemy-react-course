import React from 'react';

const ImageList = props => {
  const { images } = props;
  const mappedImages = images.map(({ id, urls, description }) => (
    <img key={id} src={urls.small} alt={description} />
  ));

  return <div>{mappedImages}</div>;
};

export default ImageList;
