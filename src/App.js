import React, { useEffect, useState } from 'react';

import Timer from './components/Timer';
import TimeStat from './components/TimeStat';
import TodoBoard from './components/TodoBoard';
import TotalTime from './components/TotalTime';
import DateBox from './components/DateBox';
import DraggableList from './components/DraggableList';

function App() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDone(true);
  //   }, 1000);
  // }, []);

  return (
    <>
      <TodoBoard todoList={[]} />
      {/* <TimeStat takenSec={1234} done={done} />
      <Timer />
      <TodoBoard />
      <TotalTime sec={1211345} />
      <DateBox />
      <DraggableList
        list={list}
        onChangeList={(nextList) => setList(nextList)}
      /> */}
    </>
  );
}

export default App;
