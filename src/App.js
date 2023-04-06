import React, { useEffect, useState } from 'react';
import Timer from './components/Timer';
import TodoItem from './components/TodoItem';
import TimeStat from './components/TimeStat';

function App() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 1000);
  }, []);

  return (
    <>
      <TimeStat takenSec={1234} done={done} />
      <Timer />
      <TodoItem txt={'hello world'} />
    </>
  );
}

export default App;
