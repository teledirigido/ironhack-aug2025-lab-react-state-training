import { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

export default function Dice() {

  const [diceSRC, setdiceSRC] = useState(diceEmpty);
  const diceOptions = [dice1, dice2, dice3, dice4, dice5, dice6];

  const handleDice = () => {
    return setdiceSRC(diceOptions[Math.floor(Math.random() * (5 - 0 + 1) + 0)]);
  }

  return (
    <>
      <div className="item">
        <img style={{ maxWidth: '100px' }} src={diceSRC} onClick={handleDice} />
      </div>
    </>
  )

}