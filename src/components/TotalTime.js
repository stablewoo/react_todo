import React from 'react';

const TotalTime = ({ sec }) => {
  const hour = parseInt(sec / 3600);
  const min = parseInt((sec - 3600 * hour) / 60);
  return (
    <div>
      {`${hour < 10 ? `0${hour}` : hour}:
        ${min < 10 ? `0${min}` : min}`}
    </div>
  );
};

export default TotalTime;
