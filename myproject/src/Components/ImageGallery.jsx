import React from 'react';
import '../assets/css/ImageGallery.css';

const ImageGallery = () => {
    const images = [
        'https://nhhs-mweb-new.s3.ap-south-1.amazonaws.com/images/elder-care-1566366748.jpg',
        'https://www.masoncohealth.com/wp-content/uploads/2016/10/shutterstock_61894672.jpg',
        'https://www.dependableseniorcare.com/wp-content/uploads/2021/02/How-Can-I-Find-a-Professional-Home-Caregiver-1.jpg',
        'https://media.licdn.com/dms/image/D4D12AQFqve29Cnc6wQ/article-cover_image-shrink_720_1280/0/1679987629936?e=2147483647&v=beta&t=fg0NMr1AT-GZOkwZ4oXIbwm3XgHSQSGMnrCKz3DRjC0',
        'https://d2fgwbymbvlegs.cloudfront.net/articles/six-tips-for-choosing-companion-care-services-for-seniors/six-tips-for-choosing-companion-care-services-for-seniors-medium.jpg',
        'https://media.licdn.com/dms/image/D4E12AQHQIU3X19JA7Q/article-cover_image-shrink_720_1280/0/1687191032661?e=2147483647&v=beta&t=CeH5AfxUxo6tfIqJF242EXk2DqFN5IAhy9XTFYvA54Y',
    ];

    return (
        <div className="image-gallery">
            {images.map((imageUrl, index) => (
                <div key={index} className="image-container">
                    <img src={imageUrl} alt={`Image ${index + 1}`} className="gallery-image" />
                    <div className="image-overlay">
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
