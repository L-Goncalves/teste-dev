import  { useEffect, useState } from "react";
import './Carousel.scss'
const images = [
  "https://via.placeholder.com/1200x300?text=Category+1",
  "https://via.placeholder.com/1200x300?text=Category+2",
  "https://via.placeholder.com/1200x300?text=Category+3",
  "https://via.placeholder.com/1200x300?text=Category+4",
  "https://via.placeholder.com/1200x300?text=Category+5",
  "https://via.placeholder.com/1200x300?text=Category+6",
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container" data-testid="carousel-container">
    <div className="carousel-image-container">
    <div className="carousel-image-indicator-container">
        {images.map((_, index) => {
           return <div onClick={() => setCurrentIndex(index)} key={index} className={currentIndex == index ? 'indicator active' : 'indicator'} />
        })}  
    </div>
    <div className="bar">Check out the most sold categories of the Week!</div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
     
    </div>

  </div>
  );
};
