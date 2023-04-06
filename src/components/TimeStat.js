import React, { useEffect, useState } from 'react';

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = ampm + ' ' + hours + ':' + minutes;
  return strTime;
}

const TimeStat = (props) => {
  const { takenSec, done } = props;
  const [doneTime, setDoneTime] = useState(null);

  const takenHour = parseInt(takenSec / 3600);
  const takenMin = parseInt((takenSec - takenHour * 3600) / 60);

  useEffect(() => {
    if (done) {
      setDoneTime(new Date());
      // console.log(new Date());
    }
  }, [done]);

  return (
    <div className="">
      <div>{`${takenHour < 10 ? `0${takenHour}` : takenHour}:${
        takenMin < 10 ? `0${takenMin}` : takenMin
      }`}</div>
      <div>{doneTime ? formatAMPM(doneTime) : 'AM 00:00'}</div>
    </div>
  );
};

export default TimeStat;
