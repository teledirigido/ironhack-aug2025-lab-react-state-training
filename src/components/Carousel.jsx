import { useState } from "react";
/**
 images={[
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ]}
 */
export default function Carousel({ images }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }
  
  const goRight = () => {
    setCurrentIndex((currentIndex + 1 + images.length) % images.length);
  }
  return(
    <>
      <button onClick={goLeft}>Left</button>
      <img src={images[currentIndex]} />
      <button onClick={goRight}>Right</button>
    </>
  ) 
}