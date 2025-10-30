import { useState } from 'react';
import maxenceImage from '../assets/images/maxence.png';
import maxenceImage2 from '../assets/images/maxence-glasses.png';

export default function ClickablePicture() {

  // Method 1
  // const [imageSRC, setImageSRC] = useState(maxenceImage);

  // Method 2
  const [displayImage1, setDisplayImage1] = useState(true);
  const [displayImage2, setDisplayImage2] = useState(false);

  const handleImage1 = () => {
     setDisplayImage1(false); 
     setDisplayImage2(true);
  }

  const handleImage2 = () => {
     setDisplayImage1(true); 
     setDisplayImage2(false);
  }

  return (
    <>

      {/* Method 1 */}
      {/* <div className="item">
        <img src={imageSRC} onClick={ () => { imageSRC === maxenceImage ? setImageSRC(maxenceImage2) : setImageSRC(maxenceImage) } } /> }
      </div> */}

      {/* Method 2  */}
      <div className="item">
        { displayImage1 && <img src={maxenceImage} onClick={handleImage1} /> }
        { displayImage2 && <img src={maxenceImage2} onClick={handleImage2} /> }
      </div>

    </>
  )
}