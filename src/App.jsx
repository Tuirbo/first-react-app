import React, { useState } from 'react';
import "./App.css";
import "./reset.css";

export default function App() {
  const[num,setNum] = useState(0);
  const[show,setShow] = useState(false);
  const buttonClicked = (num)=>{
    num++;
    setNum(num);
    if (num === 5){
      setShow(!show);
    }
  };
  const CounterReset = () => {
    setShow(false);
    setNum(0);
  }

  return(
    <div>
      <div className="yt">
        <div className="block-1">
          <p className="number">
            {num}        
          </p>
          {show ? (
          <div>
            <p>
              НЕ ДРОЧИ МЫШКУ
            </p>
            <button className="Bbutton" onClick={()=>CounterReset(num)}>Ресет</button>
          </div>
          ) : (<button className="Bbutton" onClick={()=>buttonClicked(num)}>Кнопочка</button>)}
        </div>
      </div>
    </div>
  );
}

