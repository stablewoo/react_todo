import { useEffect, useRef } from 'react';

const useTimer = (callback, delay) => {
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
      if (timerId !== null) {
        clearInterval(timerId);
      }
    };
  }, [delay]);
};

export default useTimer;
