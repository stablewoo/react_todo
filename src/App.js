import React from 'react';
import Timer from './components/Timer';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <>
      <Timer />
      <TodoItem txt={'hello world'} />
    </>
  );
}

export default App;
