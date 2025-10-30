import { useState } from "react"

export default function LikeButton({ handleColor, colorA, colorB }) {
  
  const [likesA, setLikesA] = useState(0);
  const [likesB, setLikesB] = useState(0);

  return (
    <>
    <div className="item">
      <button 
        onClick={ () => { setLikesA(likesA+1); handleColor('colorA') }}
        style={{ backgroundColor: colorA }}>
          {likesA} Likes
      </button>
      <button 
        onClick={ () => { setLikesB(likesB+1); handleColor('colorB') }}
        style={{ backgroundColor: colorB }}>
          {likesB} Likes
      </button>
    </div>
    </>
  )
}