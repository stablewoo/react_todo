import React, { useEffect, useState } from 'react';

const _initGrabData = {
  target: null,
  position: null,
  move_up: [],
  move_down: [],
  updateList: [],
};

const DraggableList = ({ list, sortable, onChangeList }) => {
  const [grab, setGrab] = useState(_initGrabData);
  const [isDrag, setIsDrag] = useState(false);

  const _onDragOver = (e) => {
    e.preventDefault();
  };

  const _onDragStart = (e) => {
    setIsDrag(true);
    setGrab({
      ...grab,
      target: e.target,
      position: Number(e.target.dataset.position),
      updateList: [...list],
    });

    e.target.classList.add('grabbing');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target);
  };

  const _onDragEnd = (e) => {
    setIsDrag(false);
    e.target.classList.remove('grabbing');
    e.dataTransfer.dropEffect = 'move';

    onChangeList([...grab.updateList]);

    setGrab({
      target: null,
      move_up: [],
      move_down: [],
      updateList: [],
    });

    e.target.style.visibility = 'visible';
  };

  const _onDragEnter = (e) => {
    let grabPosition = Number(grab.target.dataset.position);
    let listPosition = grab.position;
    let targetPosition = Number(e.target.dataset.position);

    let move_up = [...grab.move_up];
    let move_down = [...grab.move_down];

    let data = [...grab.updateList];
    data[listPosition] = data.splice(targetPosition, 1, data[listPosition])[0];

    if (grabPosition > targetPosition) {
      move_down.includes(targetPosition)
        ? move_down.pop()
        : move_down.push(targetPosition);
    } else if (grabPosition < targetPosition) {
      move_up.includes(targetPosition)
        ? move_up.pop()
        : move_up.push(targetPosition);
    } else {
      move_down = [];
      move_up = [];
    }

    setGrab({
      ...grab,
      move_up,
      move_down,
      updateList: data,
      position: targetPosition,
    });
  };
  const _onDragLeave = (e) => {
    /* e.target.classList.remove("move_up");
        e.target.classList.remove("move_down"); */
    if (e.target === grab.target) {
      e.target.style.visibility = 'hidden';
    }
  };

  return (
    <ul>
      {list.map((item, index) => (
        <li
          key={index}
          draggable
          data-position={index}
          onDragOver={_onDragOver}
          onDragStart={_onDragStart}
          onDragEnd={_onDragEnd}
          onDragEnter={_onDragEnter}
          onDragLeave={_onDragLeave}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DraggableList;
