'use client'

import React, { useState, useEffect } from "react";
import styles from "./SlidingCarousel.module.css"; 


interface CarouselItemData {
  id: string;
  imageUrl: string;
  caption: string; 
}

interface SlidingCarouselProps {
  items: CarouselItemData[];
  autoSlideInterval?: number;
}

const SlidingCarousel: React.FC<SlidingCarouselProps> = ({ items , autoSlideInterval = 3000}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (totalItems <= 1) return; 

    // แก้ไข: ใช้ autoSlideInterval (หรือ 5000) เป็น Argument ตัวที่สอง
    const slideInterval = setInterval(nextSlide, autoSlideInterval); // 👈 แก้ไขตรงนี้

    // Cleanup function
    return () => clearInterval(slideInterval);
    
}, [currentIndex, totalItems, autoSlideInterval]);

  return (
    <div className={styles.carouselContainer}>
      
      <button
        className={`${styles.carouselControl} ${styles.prev}`}
        onClick={prevSlide}
      >
        <span className={styles.arrow}>&larr;</span>
      </button>
      
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * 20}%)`, 
            width: `${totalItems * 100}%`, 
          }}
        >
          {items.map((item) => (
            <div
              key={item.id} 
              className={styles.carouselItem}
              style={{ width: `${100 / totalItems}%` }}
            >
              <img 
                src={item.imageUrl} 
                alt={item.caption} 
                className={styles.carouselImage}
              />
              <div className={styles.carouselCaption}>
                  {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className={`${styles.carouselControl} ${styles.next}`}
        onClick={nextSlide}
      >
        <span className={styles.arrow}>&rarr;</span>
      </button>
    </div>
  );
};

export default SlidingCarousel;