import React from 'react';
import ImageGallery from 'react-image-gallery';
// styles
import './styles/gallery.css';
import 'react-image-gallery/styles/css/image-gallery.css';

class Gallery extends React.Component {

  render() { 

    let images = []
    for(let i = 1; i < 8; i++) images.push({
      original: `https://masplay-api.edu6jas.now.sh/static/images/${i}.jpg`,
      thumbnail: `https://masplay-api.edu6jas.now.sh/static/images/${i}.jpg`
    });

    return (
      <div className="gallery-container-section">
        <h1 className="has-text-centered title">Galería de imágenes</h1>
        <div className="gallery-container-center">
          <ImageGallery items={images} />
        </div>
      </div>
    );
  }

}

export default Gallery;