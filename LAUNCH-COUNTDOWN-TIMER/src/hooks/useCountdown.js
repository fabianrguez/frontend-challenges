import { TO_HOURS_FACTOR, TO_MINUTES_FACTOR, TO_SECONDS_FACTOR, TO_DAY_FACTOR } from 'constants';
import { useEffect, useState } from 'react';
import { useInterval } from './useInterval';

export function useCountdown(dateTarget) {
  const [countdown, setCoundtown] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(1);

  useInterval(() => {
    const _countdown = countdown - 1000;
    setCoundtown(_countdown);
    const days = Math.floor(_countdown / TO_DAY_FACTOR);
    const daysRest = _countdown % TO_DAY_FACTOR;
    
    const hours = Math.floor(daysRest / TO_HOURS_FACTOR);
    const hoursRest = _countdown % TO_HOURS_FACTOR;
    
    const minutes = Math.floor(hoursRest / TO_MINUTES_FACTOR);
    const minutesRest = _countdown % TO_MINUTES_FACTOR;
    
    const seconds = Math.floor(minutesRest / TO_SECONDS_FACTOR);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, 1000);

  useEffect(() => {
    if (dateTarget instanceof Date) {
      const targetMilliseconds = dateTarget.getTime();
      const now = Date.now();

      if (targetMilliseconds > now) {
        setCoundtown(targetMilliseconds - now);
      }
    }
    //eslint-disable-next-line
  }, []);

  return {
    timeRemain: {
      days,
      hours,
      minutes,
      seconds,
    },
  };
}
