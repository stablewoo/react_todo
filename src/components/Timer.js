import React, { useState } from "react";

const Timer = () => {

  const [num, setnum] = useState(0);

  const increase5 = () => {
    setnum(num + 300);
  }

  const increase10 = () => {
    setnum(num + 600);
  }

  const increase1h = () => {
    setnum(num + 3600);
  }

  return (
    <div>
      <button onClick={increase5}>+5m</button>
      <button onClick={increase10}>+10m</button>
      <button onClick={increase1h}>+1h</button>
    </div>
  )
};

export default Timer;