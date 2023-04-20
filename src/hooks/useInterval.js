import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
  const savedCallback = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const executeCallback = () => {
      savedCallback.current();
    };
    let timerId = null;
    if (delay) {
    timerId = setInterval(executeCallback, delay); 
  }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, []);
};

export default useInterval;
