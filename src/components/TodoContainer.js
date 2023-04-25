import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import Timer from './Timer';

const TodoContainer = ({ item }) => {
  return (
    <div>
      <TodoItem item={item} />
      <Timer />
    </div>
  );
};

export default TodoContainer;
