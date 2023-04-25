import TodoItem from './TodoItem';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoContainer from './TodoContainer';

function TodoBoard(props) {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    setTodoList([
      ...todoList,
      {
        id: uuidv4(),
        txt: inputValue,
      },
    ]);
  };

  const onKeyEnterDown = (e) => {
    if (e.key !== 'Enter') return;
    if (inputValue === '') return;
    addItem();
    setInputValue('');
  };

  return (
    <div className="todoboard">
      <div>
        <input
          className="todoboard__input"
          placeholder="Press Enter for new to-do list"
          value={inputValue}
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(e) => onKeyEnterDown(e)}
        />
      </div>
      <div>
        {todoList.map((item) => {
          return <TodoContainer key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default TodoBoard;
