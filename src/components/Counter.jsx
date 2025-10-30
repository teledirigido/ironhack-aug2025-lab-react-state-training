import { useState } from "react";

export default function Counter() {
  
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="item item-counter">
        <button onClick={ () => { setCounter(counter > 0 ? counter - 1 : 0 ) }} className="button-counter">-</button>
        {counter}
        <button onClick={ () => { setCounter(counter + 1) }} className="button-counter">+</button>
      </div>
    </>
  )
}