import React from 'react';
import './gallery.css';

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Photo Collection 1', description: 'Coming Soon' },
    { id: 2, title: 'Photo Collection 2', description: 'Coming Soon' },
    { id: 3, title: 'Photo Collection 3', description: 'Coming Soon' },
    { id: 4, title: 'Photo Collection 4', description: 'Coming Soon' },
    { id: 5, title: 'Photo Collection 5', description: 'Coming Soon' },
    { id: 6, title: 'Photo Collection 6', description: 'Coming Soon' },
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
