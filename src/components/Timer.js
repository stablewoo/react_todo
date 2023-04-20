import React, { useState } from 'react';
import { HiPlayPause } from 'react-icons/hi2';
import useInterval from '../hooks/useInterval';

function timeToSec(time) {
  return time.h * 3600 + time.m * 60 + time.s;
}

function secToTime(sec) {
  const h = parseInt(sec / 3600);
  const m = parseInt((sec - h * 3600) / 60);
  const s = parseInt(sec % 60);

  return {
    h,
    m,
    s,
  };
}

const Timer = () => {
  const [time, setTime] = useState({
    h: 0,
    m: 0,
    s: 0,
  });
  const [play, setPlay] = useState(false);

  useInterval(
    () => {
      setTime((currTime) => {
        const currSec = timeToSec(currTime);
        return secToTime(currSec - 1);
      });
    },
    play ? 1000 : null,
  );

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
        <button onClick={() => setPlay((prevPlay) => !prevPlay)}>
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
