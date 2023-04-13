import React, { useState, useRef, useEffect } from 'react';
import { HiPlayPause } from 'react-icons/hi2';
import useInterval from '../hooks/useInterval';

const Timer = () => {
  const [time, setTime] = useState({
    h: 0,
    m: 0,
    s: 0,
  });

  function toSec(time) {
    return time.h * 3600 + time.m * 60 + time.s;
  }
  
  const [play, setPlay] = useState(false);
  const countDownRef = useRef(0);

   useEffect(() => {
    const countDownTimer = setInterval(() => {
      console.log('타이머 돌아간다~')
    }, 1000);

    return() =>{
      clearInterval(countDownTimer)
      console.log('타이머 끝났다~')
    }
  },[play]) 
  
  /*
  useInterval(() => {
    setTime((currTime) => {
      const currSec = toSec(currTime)
      return countDownSec(currSec -1);
    })
  }, 1000) 
  */

  const incMin5 = () => {
    setTime((prev) => {
      const nextM = prev.m + 5;
      return {
        ...prev,
        m: nextM >= 60 ? 0 : nextM,
      };
    });
  };

  const incMin10 = () => {
    setTime((prev) => {
      const nextM = prev.m + 10;
      return {
        ...prev,
        m: nextM >= 60 ? 0 : nextM,
      };
    });
  };

  const incHour1 = () => {
    setTime((prev) => {
      const nextH = prev.h + 1;
      return {
        ...prev,
        h: nextH >= 24 ? 0 : nextH,
      };
    });
  };


  return (
    <div>
      <span>
        {`${time.h < 10 ? `0${time.h}` : time.h}:
          ${time.m < 10 ? `0${time.m}` : time.m}:
          ${time.s < 10 ? `0${time.s}` : time.s}`}
        <button onClick={() => setPlay(!setPlay)}>
          <HiPlayPause />
        </button>
      </span>
      <div>
        <button onClick={incHour1}>+1h</button>
        <button onClick={incMin10}>+10m</button>
        <button onClick={incMin5}>+5m</button>
      </div>
    </div>
  );
};

export default Timer;
