import { useState } from "react";
import LikeButton from "./LikeButton";

export default function DiscoButton() {
  const colorPalette =  ["purple", "blue", "green", "yellow", "orange", "red"];
  const [colorA, setColorA] = useState(colorPalette[0]);
  const [colorB, setColorB] = useState(colorPalette[0]);
  
  const handleColor = (target) => {
    if (target === 'colorA') {
      setColorA(colorPalette[Math.floor(Math.random() * (5 - 0 + 1) + 0)])
    }
    if (target === 'colorB') {
      setColorB(colorPalette[Math.floor(Math.random() * (5 - 0 + 1) + 0)])
    }
  }

  return (
    <div className="item">
      <LikeButton handleColor={handleColor} colorA={colorA} colorB={colorB} />
    </div>
  )
}