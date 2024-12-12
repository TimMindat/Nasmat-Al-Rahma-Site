import { useState, useEffect } from 'react';
import { HAJJ_START_DATE } from '../constants';
import type { TimeLeft } from '../types';

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(HAJJ_START_DATE) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
          minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
          seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0')
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}