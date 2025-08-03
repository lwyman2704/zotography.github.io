import React from 'react';
import './gallery.css';

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Photo Collection 1', description: 'A collection of nature shots.' },
    { id: 2, title: 'Cityscape Photos', description: 'Urban photography from around the world.' },
    { id: 3, title: 'Portrait Session', description: 'Professional headshots and portraits.' },
    { id: 4, title: 'Wildlife Photography', description: 'Stunning images of animals in their natural habitat.' },
    { id: 5, title: 'Architectural Shots', description: 'Showcasing unique buildings and city skylines.' },
    { id: 6, title: 'Event Coverage', description: 'Photos from recent events and conferences.' },
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        <h1>Gallery</h1>
        <p>Explore my collections of photos and projects below.</p>
        
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}