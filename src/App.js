import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Timer from './components/Timer';
import TimeStat from './components/TimeStat';
import TodoBoard from './components/TodoBoard';
import TotalTime from './components/TotalTime';
import DateBox from './components/DateBox';
import DraggableList from './components/DraggableList';

function App() {
  const [done, setDone] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const [todoList, setTodoList] = useState([]);

  const [list, setList] = useState(['apple', 'banana', 'cabage', 'dagger']);

  useEffect(() => {
    console.log(list);
  }, [list]);

  const addItem = () => {
    setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        txt: inputValue,
      },
    ]);
  };

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 1000);
  }, []);

  function onKeyEnterDown(e) {
    if (e.key !== 'Enter') return;
    addItem();
  }

  return (
    <>
      <span>
        <input
          value={inputValue}
          type="text"
          // placeholder="Press for to-do list"
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(e) => onKeyEnterDown(e)}
        />
        <button onClick={addItem}>추가</button>
      </span>
      <TimeStat takenSec={1234} done={done} />
      <Timer />
      <TodoBoard todoList={todoList} />
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
