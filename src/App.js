import React, { useEffect, useState } from 'react';
import Timer from './components/Timer';
import TimeStat from './components/TimeStat';
import TodoBoard from './components/TodoBoard';

function App() {

  const [done, setDone] = useState(false);

  const [inputValue, setInputValue] = useState('')

  const [todoList, setTodoList] = useState([])

  const addItem = () => {
    setTodoList([...todoList, inputValue])
  }

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 1000);
  }, []);

  return (
    <>
    <span>
      <input value={inputValue} type="text" onChange= {(event) => setInputValue(event.target.value)} />
      <button onClick={addItem}>추가</button>
    </span>
      <TimeStat takenSec={1234} done={done} />
      <Timer />
      <TodoBoard todoList = {todoList} />
    </>
  );
}

export default App;
