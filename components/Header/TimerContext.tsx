"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type TimerContextType = {
  time: number;
  running: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
};

const TimerContext = createContext<TimerContextType | null>(null);

export function TimerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [time, setTime] = useState(420); // 6:59
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          setRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setTime(419);
  };

  return (
    <TimerContext.Provider
      value={{
        time,
        running,
        startTimer,
        stopTimer,
        resetTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export const useTimer = () => {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error("useTimer must be inside TimerProvider");
  }

  return context;
};