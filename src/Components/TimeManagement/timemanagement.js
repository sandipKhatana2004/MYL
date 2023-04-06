import React, { useState, useRef } from "react";
import "./timemanagement.css";

function padTime(time) {
  return time.toString().padStart(2, "0");
}

const TimeManagement = () => {
  const [title, setTitle] = useState("Let The Countdown Begin!!!");
  const [timeLeft, setTimeLeft] = useState(600);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function IncTime() {
    if (isRunning === true) return;
    else {
      setTimeLeft(timeLeft + 300);
    }
  }
  function DecTime() {
    if (isRunning === true) return;
    else {
      if (timeLeft <= 300) {
        setTimeLeft(300);
      } else {
        setTimeLeft(timeLeft - 300);
      }
    }
  }

  function startTimer() {
    if (intervalRef.current !== null) return;

    setTitle("You're Doing Great!");
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;
        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Keep It Up!");
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("You'r Ready To Go Another Round?");
    setTimeLeft(10 * 60);
    setIsRunning(false);
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);
  return (
    <div className="app">
      <h2 className="tm-title">{title}</h2>
      <div className="timer">
        <span className="tm-span-minutes">{minutes}</span>
        <span className="tm-span-semicolon">:</span>
        <span className="tm-span-seconds">{seconds}</span>
      </div>
      <div className="ControlBox">
        {!isRunning && (
          <button onClick={IncTime} className="TimeControl">
            Increace Time
          </button>
        )}
        {!isRunning && (
          <button onClick={DecTime} className="TimeControl">
            Decreace Time
          </button>
        )}
        {!isRunning && (
          <button onClick={resetTimer} className="TimeControl">
            Reset Timer
          </button>
        )}
        {!isRunning && (
          <button className="TimeControl" onClick={startTimer}>
            Start
          </button>
        )}
        {isRunning && (
          <button className="TimeControl" onClick={stopTimer}>
            Stop
          </button>
        )}
      </div>
    </div>
  );
};

export default TimeManagement;
