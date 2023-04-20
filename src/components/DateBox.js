import React from 'react';
import { format, getWeekOfMonth } from 'date-fns';

const DateBox = () => {
  const date = new Date();
  const weekOfMonth = getWeekOfMonth(date);
  const dateStr = format(date, 'MMMM yyyy, EEE');

  return <>{`${weekOfMonth}th ${dateStr}`}</>;
};

export default DateBox;
