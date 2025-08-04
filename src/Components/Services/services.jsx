import React from 'react';
import { Link } from 'react-router-dom';
import './services.css';

// Import your service-specific images here
import sample1 from '../../assets/sample1.jpg';
import sample2 from '../../assets/sample2.jpg';
import sample3 from '../../assets/sample3.jpg';
import sample4 from '../../assets/sample4.jpg';
import sample5 from '../../assets/sample5.jpg';
import sample6 from '../../assets/sample6.jpg';
import dame1 from '../../assets/dame1.jpg';
import dame2cpy from '../../assets/dame2cpy.png';
import kalani1 from '../../assets/kalani1.jpg';
import kalani2 from '../../assets/kalani2.jpg';

const servicesData = [
    {
        title: "Nature Photography",
        description: "Capture the beauty of the outdoors with stunning landscapes and wildlife. This includes hiking, sunrise, and sunset sessions.",
        image: sample1,
        serviceType: 'nature'
    },
    {
        title: "Portrait Photography",
        description: "Whether it's for a family portrait, professional headshot, or personal branding, we'll create images that reflect your personality.",
        image: sample5,
        serviceType: 'portrait'
    },
    {
        title: "Cityscape Photography",
        description: "Explore the vibrant streets, breathtaking architecture, and unique atmosphere of urban environments.",
        image: sample6,
        serviceType: 'cityscape'
    },
    {
        title: "Casual Photography",
        description: "Capturing the emotion and casualty of your day with timeless, artistic imagery that tells your unique story.",
        image: sample4,
        serviceType: 'wedding'
    },
    {
        title: "Fashion Photography",
        description: "Showcase your brand or personal style with creative fashion shoots tailored to your vision and aesthetic.",
        image: kalani1,
        serviceType: 'fashion'
    },
    {
        title: "Personal Photography",
        description: "From intimate moments to bold statements, we create a visual narrative that celebrates you and your journey.",
        image: dame2cpy,
        serviceType: 'personal'
    },
];

export default function Services() {
    return (
        <div className="services-page">
            <h1 className="services-title">Services</h1>
            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.image} alt={service.title} className="service-card-image" />
                        <div className="service-card-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link to={`/book/${service.serviceType}`} className="book-button">
                                Book Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}