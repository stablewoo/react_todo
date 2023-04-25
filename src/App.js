import React, { useEffect, useState } from 'react';

import Timer from './components/Timer';
import TimeStat from './components/TimeStat';
import TodoBoard from './components/TodoBoard';
import TotalTime from './components/TotalTime';
import DateBox from './components/DateBox';
import DraggableList from './components/DraggableList';

function App() {
  const [done, setDone] = useState(false);

  const [list, setList] = useState(['apple', 'banana', 'cabage', 'dagger']);

  useEffect(() => {
    console.log(list);
  }, [list]);


  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 1000);
  }, []);

  return (
    <>
      <TimeStat takenSec={1234} done={done} />
      <Timer />
      <TodoBoard />
      <TotalTime sec={1211345} />
      <DateBox />
      <DraggableList
        list={list}
        onChangeList={(nextList) => setList(nextList)}
      />
    </>
  );
}

export default App;
